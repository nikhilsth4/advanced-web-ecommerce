import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

function App() {
  const cart_items = useSelector((state) => state.cart.cart_items);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart_items));
    console.log(process.env.REACT_APP_AUTH_DOMAIN);
  }, [cart_items]);
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<SingleProduct />} />
          <Route exact path="/checkout" element={<PrivateRoute />}>
            <Route exact path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="*" element={Error} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
