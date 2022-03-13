import * as actionTypes from "./types";

const setProducts = (products) => {
   return {
      type: actionTypes.SET_PRODUCTS,
      payload: products,
   };
};

export default setProducts;
