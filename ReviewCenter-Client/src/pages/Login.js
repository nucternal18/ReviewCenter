import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import { useHistory, useLocation, Link } from 'react-router-dom';

// custom-hook
import useErrorHandler from '../utils/custom-hooks/ErrorHandler';

// Display Error message
import ErrorMessage from '../components/ErrorMessage';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, showError } = useErrorHandler(null);
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();

  const { loginUser, isError, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push(
        location.state?.requestedPath ?? './dashboard'
      )
    }

    if (isError === 'Invalid Credentials') {
      showError('The username or password provided were incorrect!');
      clearErrors();
    } // eslint-disable-next-line
  }, [isError, isAuthenticated, history]);

  const onSubmit = (e) => {
    e.preventDefault();
      if (email === '' || password === '') {
        showError('Please enter your username/password');
    } else {
      loginUser(
        email,
        password,
      );
    }
  };

  return (
    <div className="w-full mx-auto  max-w-sm">
      <h1 className="my-8 text-center text-3xl">
        Account <span className="text-blue-700">Login</span>
      </h1>
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-base font-bold mb-2"
          >
            Email Address
          </label>
          <input
            className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isError && <ErrorMessage errorMessage={error} />}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 w-2/5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <p
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Not Registered?{" "}
            <span className="text-blue-700">
              <Link to='/signup'>Sign Up</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
