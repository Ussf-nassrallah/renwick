import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as actioneTypes from "../Store/actions/types";
import styles from "../styles/Checkout.module.scss";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({ product }) => {
   // const [input, setInput] = useState(product.qty);
   const dispatch = useDispatch();
   let counter = 1;

   // useEffect(() => {
   //    dispatch({
   //       type: actioneTypes.ADJUST_ITEM_QTY,
   //       payload: {
   //          id: product.id,
   //          qty: counter,
   //       },
   //    });
   // }, [counter]);

   console.log(counter);

   const addProduct = () => {
      counter++;

      dispatch({
         type: actioneTypes.ADJUST_ITEM_QTY,
         payload: {
            id: product.id,
            qty: counter,
         },
      });
   };

   const removeProduct = () => {
      setCounter(counter - 1);
   };

   const removeFromCart = () => {
      dispatch({
         type: actioneTypes.REMOVE_FROM_CART,
         payload: {
            id: product.id,
         },
      });
   };

   return (
      <tr key={product.id}>
         <td className={styles.checkoutProduct}>
            <Image
               src={product.image}
               objectFit="contain"
               width={200}
               height={200}
            />

            <div className={styles.checkoutProductInfo}>
               <h4 className={styles.title}>{product.title}</h4>
               <p className={styles.category}>{product.category}</p>
               <p onClick={removeFromCart}>remove</p>
            </div>
         </td>

         <td>
            {/* <input
               id="number"
               type="number"
               value={input}
               onChange={onChangeHandler}
            /> */}
            <div className={styles.counter}>
               <button onClick={addProduct}>+</button>
               <p className={styles.counterValue}>{counter}</p>
               <button onClick={removeProduct}>-</button>
            </div>
         </td>

         <td>
            <p className={styles.price}>$ {product.price}</p>
         </td>

         <td>$ {product.price * counter}</td>
      </tr>
   );
};

export default CheckoutProduct;
