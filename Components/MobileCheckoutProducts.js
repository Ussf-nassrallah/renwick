import React, { useState } from "react";

import styles from "../styles/Components/MobileCheckoutProducts.module.scss";
import { useSelector } from "react-redux";

import MobileCheckoutProduct from "./MobileCheckoutProduct";

const MobileCheckoutProducts = () => {
  const shopProducts = useSelector((state) => state.cart);

  return (
    <section className={styles.m__CheckoutProducts}>
      {shopProducts.map((product, index) => (
        <MobileCheckoutProduct key={index} product={product} />
      ))}
    </section>
  );
};

export default MobileCheckoutProducts;
