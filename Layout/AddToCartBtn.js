import React from "react";
import * as actionTypes from "../Store/actions/types";
import { useDispatch } from "react-redux";
import addToCart from "../Store/actions/addToCart";
import styles from "../styles/Layout/AddToCartBtn.module.scss";

function AddToCartBtn({ props }) {
   const dispatch = useDispatch();

   return (
      <button
         className={styles.addToCartBtn}
         onClick={() => dispatch(addToCart(props))}
      >
         Add To Cart
      </button>
   );
}

export default AddToCartBtn;
