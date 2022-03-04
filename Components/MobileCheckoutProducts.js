import React from "react";
import Image from "next/image";

import styles from "../styles/Components/MobileCheckoutProducts.module.scss";
import { useSelector } from "react-redux";

const MobileCheckoutProducts = () => {
  const shopProducts = useSelector((state) => state.cart);

  return (
    <section className={styles.m__CheckoutProducts}>
      {shopProducts.map((product) => (
        <div key={product.id} className={styles.m__CheckoutProduct}>
          <Image
            src={product.image}
            objectFit="contain"
            width={170}
            height={170}
          />

          <div>
            <p className={styles.productTitle}>{product.title}</p>

            <div className={styles.flex}>
              <p className={styles.productPrice}>Prix : {product.price} $</p>
              <p className={styles.total}>Total : 150$</p>
            </div>

            <div className={styles.flex}>
              <input type="number" />
              <p className={styles.removeBtn}>remove</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MobileCheckoutProducts;
