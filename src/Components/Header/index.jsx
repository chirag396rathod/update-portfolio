import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 0 2em rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    gap: 0 20px;
    a {
      text-decoration: none !important;
    }
    li {
      color: #32323a;
      font: 600 22px "Nunito";
      cursor: pointer;
      list-style: none;
      @media (max-width: 440px) {
        font-size: 16px;
      }
      &.active {
        color: #e98b2c;
      }
    }
  }
`;

const Header = () => {
  const route = useLocation();

  return (
    <Container>
      <ul>
        <Link to="/">
          <li className={route.pathname === "/" && "active"}>Who is chirag?</li>
        </Link>
        <Link to="/projects">
          <li className={route.pathname.includes("projects") && "active"}>
            Recent Work
          </li>
        </Link>
        {/* <Link to="/contact">
          <li className={route.pathname.includes("contact") && "active"}>
            Contact me!
          </li>
        </Link> */}
      </ul>
    </Container>
  );
};

export default Header;
