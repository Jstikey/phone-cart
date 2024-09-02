import { cartProps, reducerProps } from "./context";

export type Action =
  | { type: "SET_CART" }
  | { type: "CLEAR_CART" }
  | { type: "REMOVE_ITEM"; id: number }
  | { type: "INCREASE"; id: number }
  | { type: "DECREASE"; id: number }
  | { type: "TOTAL" }
  | { type: "LOADING" }
  | { type: "FETCHDATA"; data: cartProps[] };

export const reducer = (state: reducerProps, action: Action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id ? { ...item, amount: item.amount + 1 } : item
        ),
      };
    case "DECREASE":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.id ? { ...item, amount: item.amount - 1 } : item
          )
          .filter((item) => item.amount !== 0),
      };
    case "TOTAL":
      let { total, amount } = state.cart.reduce(
        (cartValue, cartItems) => {
          (cartValue.amount += cartItems.amount),
            (cartValue.total = cartItems.price * cartValue.amount);
          return cartValue;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    case "LOADING":
      return { ...state, loading: true };
    case "FETCHDATA":
      return { ...state, cart: action.data, loading: false };
    default:
      return state;
  }
};
