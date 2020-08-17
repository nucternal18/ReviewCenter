import React from "react";
import { AuthProvider } from "./context/auth/AuthContext";

// Routes
import Routes from "./routes/routes";

// Nav
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer";

// Styles
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <div className="min-h-screen flex flex-col flex-grow box-border md:box-content">
        <Routes />
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default App;
