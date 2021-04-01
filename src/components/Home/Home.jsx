import React, { useState } from "react";
import Navigation from "../UserNav/Navigation";
import Products from "./Products";
import Cart from "../Cart/Cart";
import Orders from "../UserOrder/Orders";

const Home = () => {
  const [activeElement, setActiveElement] = useState("products");

  return (
    <>
      <Navigation {...{ activeElement, setActiveElement }} />
      {activeElement === "products" ? (
        <Products />
      ) : activeElement === "cart" ? (
        <Cart />
      ) : (
        <Orders />
      )}
    </>
  );
};

export default Home;
