import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContext from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import UserContext from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContext>
    <UserContext>
      <Toaster position="top-center" />
      <App />
    </UserContext>
  </AuthContext>
);
