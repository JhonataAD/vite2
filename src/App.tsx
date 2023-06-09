import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from "./pages/Login/Login"
 
 import AppRoutes from "./routes/AppRoutes"

 import { AuthProvider } from './contexts/AuthContext';
 
 

const App: React.FC = () => {
  return (
     <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="login" element={ <  Login /> } />
        <Route path="/*" element={ < AppRoutes /> } />
      </Routes>     
      </BrowserRouter>
      </AuthProvider>
  );
};

export default App; 
