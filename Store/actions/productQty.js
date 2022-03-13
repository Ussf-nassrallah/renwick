import * as actionTypes from "./types";

const productQty = ({ id, updatedQty }) => {
   return {
      type: actionTypes.ADJUST_ITEM_QTY,
      payload: { id: id, qty: updatedQty },
   };
};

export default productQty;
