
import React from 'react';
import { Link } from "react-router-dom";
import Burger from './Burger';


import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background-color: #010032;

  .nav-container {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .link {
    color: white;
  }

  .logo {
    padding: 15px 0;
  }
`;
 
const Navbar = () => {
  return (
    <Nav>
      <div className=" container nav-container">
      <div className="logo">
        <h3 className="text-white">
          <Link to="/" className="link">Review Center</Link>
        </h3>
      </div>
      <Burger />
      </div>
    </Nav>
  );
}

export default Navbar;