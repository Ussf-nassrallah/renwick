import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Checkout.module.scss";

const ShopCart = () => {
   const shopProducts = useSelector((state) => state.cart);

   const subtotal = () => {
      let total = [];

      const reducer = (previousValue, currentValue) =>
         previousValue + currentValue;

      for (let index = 0; index < shopProducts.length; index++) {
         total.push(shopProducts[index].total);
      }

      if (total.length !== 0) {
         let subtotal = total.reduce(reducer);
         return subtotal.toFixed(2);
      }
   };

   const shipping = (total, num) => {
      let output = 0;

      if (total > 99) {
         return (output = +total);
      } else {
         output = parseInt(total) + num;
         return output;
      }
   };

   // console.log(shopProducts);

   return (
      <div className={styles.shopCart}>
         <h3>
            Order Summary (<span>{shopProducts.length}</span> Item)
         </h3>

         <div className={styles.shopCartRow}>
            <p className={styles.shopCartRowItem}>subtotal : </p>
            <p>
               <span>${subtotal()}</span>
            </p>
         </div>

         <div className={styles.shopCartRow}>
            <p className={styles.shopCartRowItem}>shipping : </p>
            <div>
               {subtotal() > 99 ? (
                  <div className={styles.green}>Free</div>
               ) : (
                  <div className={styles.red}>${30}</div>
               )}
            </div>
         </div>

         <div className={styles.shopCartTotalRow}>
            <p className={styles.shopCartTotalRowItem}>Order total : </p>
            <p>
               <span>
                  {subtotal() > 99
                     ? `$${subtotal()}`
                     : `$${shipping(subtotal(), 30)}`}
               </span>
            </p>
         </div>

         <div>
            <button className={styles.checkoutBtn}>Checkout now</button>
         </div>
      </div>
   );
};

export default ShopCart;
