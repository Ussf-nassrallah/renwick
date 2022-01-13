import * as actionTypes from "./shopping-types";

const INITIALE_STATE = {
  products: [], // { id, category, image, title, description, price, rating }
  cart: [], // { id, category, image, title, description, price, rating, qty }
  currentItem: null,
};

const shopReducer = (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case actionTypes.ADD_TO_CART:
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.ADJUST_QTY:
      return {};
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};

export default shopReducer;
