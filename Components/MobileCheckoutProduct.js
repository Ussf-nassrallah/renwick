import React, { useState } from "react";
import styles from "../styles/Components/MobileCheckoutProducts.module.scss";
import Image from "next/image";
import * as actioneTypes from "../Store/actions/types";
import { useDispatch } from "react-redux";

const MobileCheckoutProduct = ({ product }) => {
  const [input, setInput] = useState(product.qty);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setInput(e.target.value);

    dispatch({
      type: actioneTypes.ADJUST_ITEM_QTY,
      payload: {
        id: product.id,
        qty: input,
      },
    });
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
    <div key={product.id} className={styles.m__CheckoutProduct}>
      <Image src={product.image} objectFit="contain" width={170} height={170} />

      <div className={styles.productInfo}>
        <p className={styles.productTitle}>{product.title}</p>

        <div className={styles.flex}>
          <p className={styles.productPrice}>Prix : {product.price} $</p>
          <p className={styles.total}>Total : {product.price * input}$</p>
        </div>

        <div className={styles.flex}>
          <input
            id="number"
            type="number"
            value={input}
            onChange={onChangeHandler}
          />
          <p className={styles.removeBtn} onClick={removeFromCart}>
            remove
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileCheckoutProduct;
