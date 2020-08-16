import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import { useHistory, useLocation } from 'react-router-dom';

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
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isError && <ErrorMessage errorMessage={error} />}
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;
