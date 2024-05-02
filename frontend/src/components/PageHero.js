import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper className="bg-[rgb(25,25,25)]">
      <div className="section-center">
        <h3 className="text-alto">
          <Link to="/">Home</Link>
          {product && (
            <Link to="/products" className="text-alabaster hover:text-primary">
              / Products
            </Link>
          )}
          / <span className="text-alabaster">{title}</span>
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${"" /* background: var(--clr-primary-10); */}
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  a {
    padding: 0.5rem;
    transition: var(--transition);
  }
`;

export default PageHero;
