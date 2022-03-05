import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "../styles/Checkout.module.scss";

import CheckoutProducts from "../Components/CheckoutProducts";
import ShopCart from "../Components/ShopCart";
import MobileCheckoutProducts from "../Components/MobileCheckoutProducts";
import PrimaryBtn from "../Layout/PrimaryBtn";

export default function Checkout() {
  const [mobileShopProducts, setMobileShopProducts] = useState(null);
  const shopProducts = useSelector((state) => state.cart);

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 640) {
      setMobileShopProducts(true);
    } else {
      setMobileShopProducts(false);
    }
  }, []);

  const ProductsList = () => {
    return (
      <div className={styles.flex}>
        {/* Left */}
        {mobileShopProducts ? <MobileCheckoutProducts /> : <CheckoutProducts />}
        {/* Right */}
        <ShopCart />
      </div>
    );
  };

  return (
    <>
      <div className={styles.shop}>
        {shopProducts.length !== 0 ? <ProductsList /> : <ShopNow />}
      </div>
    </>
  );
}

export const ShopNow = () => {
  return (
    <div className={styles.shopNow}>
      <h2>Your cart is empty</h2>
      <PrimaryBtn value="Shop our products" />
    </div>
  );
};
