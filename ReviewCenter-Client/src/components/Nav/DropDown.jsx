import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropDown = ({ onLogout, show, setShowDropDown }) => {
  return (
    <>
      <Ul showDropDown={show}>
        <Link to="/myreview">
          <li onClick={() => setShowDropDown(!show)}>My Reviews</li>
        </Link>
        <Link to="/settings">
          <li onClick={() => setShowDropDown(!show)}>My Settings</li>
        </Link>

        <Link to="/help">
          <li onClick={() => setShowDropDown(!show)}>Help</li>
        </Link>

        <li onClick={() => setShowDropDown(!show)}>
          <a onClick={onLogout} href="#!">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </Ul>
    </>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: ${({ showDropDown }) => (showDropDown ? "block" : "none")};
  flex-flow: column nowrap;
  background-color: #010032;
  border-top-color: white;
  border-top-style: solid;
  border-top-width: 5px;
  margin-top: -4px;

  li {
    list-style: none;
    width: 100%;
    color: #fff;
    &:hover {
      background-color: #618bf4;
      list-style: none;
    }
  }

  @media (max-width: 768px) {
    border: none;
    display: block;
    .link {
      padding: 0;
    }
  }
`;

export default DropDown;
