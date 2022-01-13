import * as actionTypes from "../actions/types";

const initialState = {
    products: [],
    cart: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload };
        case actionTypes.ADD_TO_CART:
            const inCart = state.cart.find((product) =>
                product.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                          item.id === action.payload.id
                              ? { ...item, qty: item.qty + 1 }
                              : item
                      )
                    : [...state.cart, { ...action.payload, qty: 1 }],
            };
        case actionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +action.payload.qty + 1 }
                        : item
                ),
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(
                    (product) => product.id !== action.payload.id
                ),
            };
        default:
            return state;
    }
}

export default rootReducer;
