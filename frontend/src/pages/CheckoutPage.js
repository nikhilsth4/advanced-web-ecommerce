import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import EthereumCheckout from "../components/EthereumCheckout";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  const { cart_items, total_amount, shipping_fee } = cart;
  const calculateOrderAmount = () => {
    return shipping_fee + total_amount;
  };

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.cart_items.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <StripeCheckout />
            </div>
            <div className="col-span-2 sm:col-span-1 flex justify-center items-end">
              <EthereumCheckout />
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
