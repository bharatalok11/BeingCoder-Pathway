import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; // Ensure correct path based on your structure
import Dashboard from './pages/Dashboard';

import {AuthProvider} from "./Context/User.context.jsx"
import ProtectedRoute from './components/ProtectedRoute.jsx';


function App() {

  return (

    <Router>
      <AuthProvider>

      <Routes>
        <Route path="/" element={<Home />} />
       
       
        <Route path="/dashboard/*" element={
          //<ProtectedRoute>
        <Dashboard />
      //</ProtectedRoute>
      } />
      </Routes>

      </AuthProvider>
    </Router>

  );
}




export default App;
