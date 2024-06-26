import React from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";

import { openSideBar } from "../redux/products/products.action";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();

  return (
    <NavContainer className="bg-black">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            {/* <img src={logo} alt='Comfy Sloth' /> */}
            <h1 className="text-3xl font-bold text-white lowercase">
              ecommerce
            </h1>
          </Link>
          <button
            type="button"
            className="nav-toggle text-primary"
            onClick={() => dispatch(openSideBar())}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} className="text-white hover:text-primary-light">
                  {text}
                </Link>
              </li>
            );
          })}
          {isAuthenticated && (
            <li>
              <Link
                to="/checkout"
                className="text-white hover:text-primary-light"
              >
                Checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
