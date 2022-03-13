import * as actionTypes from "./types";

const addToCart = (product) => {
   return {
      type: actionTypes.ADD_TO_CART,
      payload: product,
   };
};

export default addToCart;
