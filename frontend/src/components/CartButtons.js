import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { closeSideBar } from "../redux/products/products.action";
import { clearCart, countCartTotals } from "../redux/cart/cart.action";
import { useAuth0 } from "@auth0/auth0-react";
import { postUser } from "../redux/user/user.action";

const CartButtons = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    dispatch(countCartTotals());
    // eslint-disable-next-line
  }, [cart.cart_items]);

  const onLoginClick = () => {
    loginWithRedirect().then(() => {
      // Dispatch your action after login
      dispatch(postUser(user?.email));
    });
  };

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link
        to="/cart"
        className="cart-btn text-white hover:text-primary"
        onClick={() => dispatch(closeSideBar())}
      >
        Cart{" "}
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value bg-persian-red">{cart.total_items}</span>
        </span>{" "}
      </Link>
      {isAuthenticated ? (
        <button
          type="button"
          className="auth-btn text-white hover:text-primary"
          onClick={() => {
            logout({ returnTo: window.location.origin });
            dispatch(clearCart());
          }}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button
          type="button"
          className="auth-btn text-white hover:text-primary"
          onClick={onLoginClick}
        >
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
