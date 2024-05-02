import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import EthereumCheckout from "../components/EthereumCheckout";
import CartTotals from "../components/CartTotals";
import { useAuth0 } from "@auth0/auth0-react";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  const { user } = useAuth0();

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page my-4">
        {cart.cart_items.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="button">
              fill it
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4 my-8">
            <div className="self-center">
              <h4>Hello, {user && user.name}</h4>
              <CartTotals />
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:justify-between">
              <div className="">
                <StripeCheckout />
              </div>

              <div className="self-center">
                <EthereumCheckout />
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
