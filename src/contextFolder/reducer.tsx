import { singleProductProps, stateProps } from "./props";

type Action =
  | { type: "SHOWDETAILS"; id: number }
  | { type: "OPENMODAL" }
  | { type: "MODALPRODUCT"; modalProd: singleProductProps }
  | { type: "CLOSEMODAL" }
  | { type: "INCREASE"; id: number }
  | { type: "DECREASE"; id: number }
  | { type: "REMOVE"; id: number }
  | { type: "ADDTOCART"; product: singleProductProps }
  | { type: "SINGLE_TOTAL"; id: number }
  | { type: "CLEAR" };
export const reducer = (state: stateProps, action: Action) => {
  switch (action.type) {
    case "SHOWDETAILS":
      const selectedItem = state.storeData.find(
        (item) => item.id === action.id
      );
      return {
        ...state,
        details: selectedItem,
      };
    case "ADDTOCART":
      return { ...state, cart: [...state.cart, action.product] };
    case "OPENMODAL":
      return { ...state, isModal: true };
    case "CLOSEMODAL":
      return { ...state, isModal: false };
    case "MODALPRODUCT":
      return { ...state, modalProduct: action.modalProd };
    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id == action.id ? { ...item, count: item.count + 1 } : item
        ),
      };
    case "DECREASE":
      const upDateCart = state.cart
        .map((item) =>
          item.id === action.id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0);
      const updataeStoreData = state.storeData.map((item) => {
        const isInCart = upDateCart.some((cartItem) => cartItem.id === item.id);
        return item.id === action.id ? { ...item, inCart: isInCart } : item;
      });

      return {
        ...state,
        storeData: updataeStoreData,
        cart: upDateCart,
      };
    case "REMOVE":
      return {
        ...state,
        storeData: state.storeData.map((item) =>
          item.id === action.id ? { ...item, inCart: false } : item
        ),
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    case "CLEAR":
      return {
        ...state,
        storeData: state.storeData.map((item) => {
          return { ...item, inCart: false };
        }),
        cart: [],
      };
    case "SINGLE_TOTAL":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id
            ? { ...item, total: item.price * item.count }
            : item
        ),
      };
    default:
      return state;
  }
};
