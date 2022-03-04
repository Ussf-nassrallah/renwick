import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Checkout.module.scss";
import CheckoutProduct from "./CheckoutProduct";

const CheckoutProducts = () => {
  const shopProducts = useSelector((state) => state.cart);

  return (
    <div className={styles.shopProducts}>
      <h3>Shopping Cart</h3>
      <table className={styles.shopProductsTable}>
        <tbody>
          <tr>
            <th>Product Details</th>
            <th>Quantity</th>
            <th>price</th>
            <th>total</th>
          </tr>

          {shopProducts.map((product) => (
            <CheckoutProduct key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutProducts;
