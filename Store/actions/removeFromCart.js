import * as actionTypes from "./types";

const removeFromCart = (id) => {
   return {
      type: actionTypes.REMOVE_FROM_CART,
      payload: { id: id },
   };
};

export default removeFromCart;
