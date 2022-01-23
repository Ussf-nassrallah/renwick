import React from "react";
import styles from "../styles/Checkout.module.scss";
import CheckoutProducts from "../Components/CheckoutProducts";
import ShopCart from "../Components/ShopCart";

export default function Checkout() {
    return (
        <>
            <div className={styles.shop}>
                <div className={styles.flex}>
                    {/* Left */}
                    <CheckoutProducts />
                    {/* Right */}
                    <ShopCart />
                </div>
            </div>
        </>
    );
}
