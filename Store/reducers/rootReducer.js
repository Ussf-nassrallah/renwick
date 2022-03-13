import * as actionTypes from "../actions/types";

const initialState = {
   products: [],
   cart: [],
};

function rootReducer(state = initialState, { type, payload }) {
   switch (type) {
      case actionTypes.SET_PRODUCTS:
         return { ...state, products: payload };

      // Add Product To Cart
      case actionTypes.ADD_TO_CART:
         const inCart = state.cart.find((product) =>
            product.id === payload.id ? true : false
         );

         return {
            ...state,
            cart: inCart
               ? state.cart.map((product) =>
                    product.id === payload.id
                       ? {
                            ...product,
                            qty: product.qty + 1,
                            total: (product.qty + 1) * product.price,
                         }
                       : product
                 )
               : [
                    ...state.cart,
                    {
                       ...payload,
                       qty: 1,
                       total: payload.price,
                    },
                 ],
         };
      // Product QTY
      case actionTypes.ADJUST_ITEM_QTY:
         return {
            ...state,
            cart: state.cart.map((product) =>
               product.id === payload.id
                  ? {
                       ...product,
                       qty: payload.qty,
                       total: payload.qty * product.price,
                    }
                  : product
            ),
         };
      // Remove Product from Cart
      case actionTypes.REMOVE_FROM_CART:
         return {
            ...state,
            cart: state.cart.filter((product) => product.id !== payload.id),
         };
      default:
         return state;
   }
}

export default rootReducer;
