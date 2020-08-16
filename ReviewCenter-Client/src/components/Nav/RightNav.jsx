import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/auth/AuthContext";
import DropDown from './DropDown';

const RightNav = ({ open, setOpen }) => {
  const [showDropDown, setShowDropDown] = useState(false)
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const handleClick = (e) => {
    setOpen(false)
  }
 
  const authLinks = (
    <>
      <li>
        <Link to="/categories" className="link">
          Categories
        </Link>
      </li>
      <li onClick={() => setShowDropDown(!showDropDown)}>
        <p className="link">Hello {user.first_name}</p>
        <DropDown
          onLogout={onLogout}
          show={showDropDown}
          setShowDropDown={setShowDropDown}
        />
      </li>
    </>
  );
  const guestLinks = (
    <>
      <li>
        <Link to="/" className="link">
          Categories
        </Link>
      </li>
      <li>
        <Link to="/signup" className="link">
          Sign up
        </Link>
      </li>
      <li>
        <Link to="/login" className="link">
          Log in
        </Link>
      </li>
    </>
  );
  return <Ul open={ open } onClick={ handleClick }>{isAuthenticated ? authLinks : guestLinks}</Ul>;
}

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  .link {
    color: #fff;
    width: 200px;
    padding: 0 5px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #010032;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 400px;
    padding-top: 3.5rem;
    opacity: 0.7;
    transition: transform 0.3s ease-in-out;
  }
`;

export default RightNav;