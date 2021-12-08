import React from "react";
import styles from "../styles/Checkout.module.scss";

const Checkout = () => {
  return (
    <>
      <div className={styles.shop}>
        <div className={styles.flex}>
          {/* Left */}
          <div className={styles.shopProducts}>
            <h3>SHOPPING Products</h3>
          </div>

          {/* Right */}
          <div className={styles.shopCart}>
            <h3>
              Order Summary (<span>1</span> Item)
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
};

export default Checkout;
