import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Checkout.module.scss";
import CheckoutProducts from "../Components/CheckoutProducts";

export default function Checkout() {
    const shopProducts = useSelector((state) => state.cart);

    return (
        <>
            <div className={styles.shop}>
                <div className={styles.flex}>
                    {/* Left */}
                    <CheckoutProducts />
                    {/* Right */}
                    <div className={styles.shopCart}>
                        <h3>
                            Order Summary (<span>{shopProducts.length}</span>{" "}
                            Item)
                        </h3>

                        <div className={styles.shopCartRow}>
                            <p>subtotal : </p>
                            <p>
                                <span>$85.00</span>
                            </p>
                        </div>

                        <div className={styles.shopCartRow}>
                            <p>shipping : </p>
                            <p>
                                <span>free</span>
                            </p>
                        </div>

                        <div className={styles.shopCartRow}>
                            <p>total before tax : </p>
                            <p>
                                <span>$85.00</span>
                            </p>
                        </div>

                        <div className={styles.shopCartRow}>
                            <p>estimated tax to be collected : </p>
                            <p>
                                <span>$85.00</span>
                            </p>
                        </div>

                        <div className={styles.shopCartTotalRow}>
                            <p>Order total : </p>
                            <p>
                                <span>$85.00</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
