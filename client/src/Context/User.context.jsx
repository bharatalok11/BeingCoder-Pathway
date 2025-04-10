import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const api = axios.create({
    withCredentials: true, // for cookies / sessions
  });

  // REGISTER
  const register = async (userData) => {
    setLoading(true);
    try {
      await api.post('/api/v1/user/register', userData);
      navigate('/login');
    } catch (error) {
      throw error.response?.data || error;
    } finally {
      setLoading(false);
    }
  };

  // LOGIN
  const login = async ({ email, password, role }) => {
    setLoading(true);
    try {
      const { data } = await api.post('/api/v1/user/login', { email, password, role });
      setUser(data?.user);
      navigate('/dashboard');
      return data;
    } catch (error) {
      throw error.response?.data || error;
    } finally {
      setLoading(false);
    }
  };

  // GET USER (For persistent login after refresh)
  const fetchUser = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/api/v1/user/get-user');
      setUser(data?.user);
      return data?.user;
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  // AUTO FETCH USER ON PAGE REFRESH (optional)
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, register, login, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for Easy Access
export const useAuth = () => useContext(AuthContext);
