import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const CartTotals = ({ isCart = false }) => {
  const cart = useSelector((state) => state.cart);
  const { total_amount, shipping_fee } = cart;
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const calculateEther = () => {
    const etherPrice = 300000; // Price of one unit of ether in dollars
    const total = shipping_fee + total_amount;
    const totalInEther = total / etherPrice;
    return totalInEther.toFixed(1);
  };

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            Shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{" "}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
            <br />
            <span className="inline-block mt-2">{calculateEther()} ether</span>
          </h4>
        </article>
        {isCart &&
          (isAuthenticated ? (
            <Link to="/checkout" className="button">
              Checkout
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => loginWithRedirect()}
              className="button"
            >
              login
            </button>
          ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .button {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 600;
  }
`;

export default CartTotals;
