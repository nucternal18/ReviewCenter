
import React from 'react';
import { Link } from "react-router-dom";
import Burger from './Burger';


import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
  background-color: #010032;

  .nav-container {
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
      <div className=" container flex flex-row justify-between">
        <div className="logo flex flex-col sm:flex-row">
          <h3 className="text-white text-3xl mr-2">
            <Link to="/" className="link">
              Review Center
            </Link>
          </h3>
          <div className='py-2 text-yellow-500'>
            <i className="fas fa-star text-2xl"></i>
            <i className="fas fa-star text-2xl"></i>
            <i className="fas fa-star text-2xl"></i>
            <i className="fas fa-star text-2xl"></i>
            <i className="fas fa-star text-2xl"></i>
          </div>
        </div>
        <Burger />
      </div>
    </Nav>
  );
}

export default Navbar;