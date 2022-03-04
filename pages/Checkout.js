import React, { useState, useEffect } from "react";
import styles from "../styles/Checkout.module.scss";

import CheckoutProducts from "../Components/CheckoutProducts";
import ShopCart from "../Components/ShopCart";
import MobileCheckoutProducts from "../Components/MobileCheckoutProducts";

export default function Checkout() {
  const [mobileShopProducts, setMobileShopProducts] = useState(null);

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 640) {
      setMobileShopProducts(true);
    } else {
      setMobileShopProducts(false);
    }
  }, []);

  return (
    <>
      <div className={styles.shop}>
        <div className={styles.flex}>
          {/* Left */}
          {mobileShopProducts ? (
            <MobileCheckoutProducts />
          ) : (
            <CheckoutProducts />
          )}
          {/* Right */}
          <ShopCart />
        </div>
      </div>
    </>
  );
}
