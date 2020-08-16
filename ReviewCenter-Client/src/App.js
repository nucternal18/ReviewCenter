import React from 'react';
import { AuthProvider } from './context/auth/AuthContext';

// Routes
import Routes from './routes/routes';

// Nav
import Navbar from './components/Nav/Navbar';

// Styles
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes />
    </AuthProvider>
  );
}

export default App;
