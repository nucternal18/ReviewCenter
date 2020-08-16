import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import { useHistory, Redirect } from "react-router-dom";

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
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Sign up</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">First Name</label>
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            required
          />
        </div>
        {isError && <ErrorMessage errorMessage={error} />}
        <input
          type="submit"
          value="Sign Up"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default SignUp;
