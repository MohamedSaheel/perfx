import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';
import Loginpage from './Components/Loginpage';
import SignupPage from './Components/SignupPage';
import HomePage from './Components/HomePage';

import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
      
      <Route path='/' element={<Navigate replace to='/perfx'/>}></Route>
        <Route path='/perfx/login' element={<Loginpage/>}></Route>
        <Route path='/perfx/*' element={<HomePage/>}></Route>
        <Route path='/perfx/signup' element={<SignupPage/>}></Route>
        

        
      </Routes>

    </BrowserRouter>    
    </ThemeProvider>
  </React.StrictMode>
);

