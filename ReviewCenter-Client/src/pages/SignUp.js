import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import {  Redirect, Link } from "react-router-dom";

// custom-hook
import useErrorHandler from "../utils/custom-hooks/ErrorHandler";

// Display Error message
import ErrorMessage from "../components/ErrorMessage";

const SignUp = () => {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const { error, showError } = useErrorHandler(null);
  const authContext = useContext(AuthContext);

  const { registerUser, isError, clearErrors } = authContext;

  useEffect(() => {
    if (isError === "Invalid Credentials") {
      showError("The username or password provided were incorrect!");
      clearErrors();
    } // eslint-disable-next-line
  }, [isError]);

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if (password !== confirmpassword) {
        showError("Passwords do not match! Please try again.");
      }
      const formData = {
        first_name,
        last_name,
        email,
        password,
      };
      registerUser(formData);

      setRegistered(true);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setConfirmpassword("");
    } catch (error) {
      console.log(error.message);
      showError(error.message);
    }
  };
  if (registered) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="w-full mx-auto  max-w-md">
      <h1 className="my-8 text-center text-3xl">
        Account <span className="text-blue-700">Sign up</span>
      </h1>
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="email"
          >
            First Name
          </label>
          <input
            className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="first_name"
            value={first_name}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="email"
          >
            Last Name
          </label>
          <input
            className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="last_name"
            value={last_name}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
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
            required
          />
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="password"
          >
            Confirm Password
          </label>
          <input
            className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            required
          />
        </div>
        {isError && <ErrorMessage errorMessage={error} />}

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 w-2/5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <p
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Already Registered? <span className="text-blue-700"><Link to='/login'>login</Link></span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
