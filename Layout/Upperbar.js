import React from "react";
import styles from "../styles/Layout/Upperbar.module.scss";

function Upperbar() {
  return (
    <section className={styles.ub}>
      <p className={styles.ubContent}>
        Free U.S. Shipping for the holidays ; Free Gift Socks on orders over $50
      </p>
    </section>
  );
}

export default Upperbar;
