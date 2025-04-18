import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


axios.defaults.withCredentials = true;

// User.context.jsx (unchanged context provider)
export const AuthContext = createContext();


const api=axios .create({

  withCredentials:true

});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

 // const api = axios.create({ withCredentials: true });


  const register = async (userData) => {
    setLoading(true);
    try {
      await axios.post(`${api}/api/v1/user/register`, userData);
    } catch (error) {
      throw error.response?.data || error;
    } finally {
      setLoading(false);
    }
  };

  const login = async ({ email, password, role }) => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${api}/api/v1/user/login`, { email, password, role });
      setUser(data?.user);
      return data;
    } catch (error) {
      throw error.response?.data || error;
    } finally {
      setLoading(false);
    }
  };

  const fetchUser = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${api}/api/v1/user/get-user`, { withCredentials: true });
      setUser(data?.user);
      return data?.user;
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchUser();
  }, []);
  
  return (
    <AuthContext.Provider value={{ user, loading, register, login, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Still exported like this
export const useAuth = () => useContext(AuthContext);
