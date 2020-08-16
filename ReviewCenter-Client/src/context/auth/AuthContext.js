import React, { createContext, useState } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

// const noop = () => { };

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [ isError, setIsError ] = useState(null);
  // let loadedToken;

  // Load User,
  const loadUser = async (userid) => {
    // @todo - load token into global header
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      setIsAuthenticated(true);
    }
    try {
      const res = await axios.get(`/api/user/${userid}`);
      setUserData(res.data);
    } catch (err) {
      console.log(err);
      setIsError(err.msg);
    }
  };

  // Register User,
  const registerUser = async (formData) => {
    try {
      const {
        first_name,
        last_name,
        email,
        password
      } = formData
      const res = await axios.post("/api/signup", {
        first_name,
        last_name,
        email,
        password,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
      setIsError(err.msg);
    }
  };

  // Login User
  const loginUser = async (email, password) => {
    try {
      const res = await axios.post('/api/signin', { email, password });
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
      setLoading(false);
      loadUser(res.data.userid);
    } catch (err) {
      console.log(err);
      setIsError(err.msg);
    }
  };


  // load token from local storage
  // const loadFromLocalStorage = () => {
  //   const token = localStorage.getItem('token');
  //   loadedToken = token;
  // }
  // Logout
  const logout = async () => {
    localStorage.removeItem('token');
    await axios.post('/api/logout');
    setIsAuthenticated(false);
    setLoading(false);
    setUserData({});
    setToken(null);
  };
  // Clear Errors
  const clearErrors = () => setIsError(null);

  return (
    <AuthContext.Provider
      value={{
        token: token,
        isAuthenticated: isAuthenticated,
        loading: loading,
        user: userData,
        isError: isError,
        setIsError,
        registerUser,
        loadUser,
        loginUser,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
