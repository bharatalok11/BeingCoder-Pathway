import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {   
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const api = axios.create({
    withCredentials: true,
  });

  const register = async (prop) => {
    try {
      setLoading(true);
      const response = await api.post('/api/v1/user/register', {
        username: prop.username,
        name: prop.name,
        email: prop.email,
        phone: prop.phone,
        password: prop.password,
        role: prop.role
      });

      setLoading(false);
      navigate('/login');
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    } finally {
      setLoading(false);
    }
  };

  const login = async ({ email, password, role }) => {
    try {
      setLoading(true);
      
      const response = await api.post("/api/v1/user/login", { email, password, username });

      console.log("User from API:", response.data.user); // Debugging

      setUser(response.data.user); // ✅ Update user state
      console.log("Updated User in Context:", user); // Check if it's updating

      navigate("/profile"); 
      return response.data; 
    } catch (error) {
      console.error("Login error:", error);
      throw error.response?.data || error;
    } finally {
      setLoading(false);
    }
  };


  const currentUser=async(req ,res)=>{

    try {

      const response =await api.get("/api/user/present/user");
      return response.data?.user 
      
    } catch (error) {
      console.error("Error fetching user:", error);
    }


  }

  // ✅ Check if the user session persists after refresh
 
  return (
    <AuthContext.Provider value={{ user, loading, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
