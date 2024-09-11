import { FC, useContext, useReducer } from "react";
import { GlobalContextProps, globalContext, stateProps } from "./props";
import { reducer } from "./reducer";
import { detailProduct, storeProducts } from "../data";

const initialState: stateProps = {
  storeData: storeProducts,
  details: detailProduct,
  cart: [],
  isModal: false,
  modalProduct: detailProduct,
  sumTotal: 0,
  quantity: 0,
  tax: 1,
  gross: 0,
};

export const useGlobalContext = () => {
  const context = useContext(globalContext);
  if (context === null) {
    throw new Error("context is null");
  }
  return context;
};

export const GlobalContext: FC<GlobalContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // SHOW DETAILS
  const handleDetail = (id: number) => {
    dispatch({ type: "SHOWDETAILS", id: id });
  };

  // ADD TO CART
  const addToCart = (id: number) => {
    const index = state.storeData.findIndex((product) => product.id === id);

    if (index !== -1) {
      const updatedStoreData = [...state.storeData];
      const product = updatedStoreData[index];
      product.inCart = true;
      product.count = 1;
      const price = product.price;
      product.total = price;

      dispatch({ type: "ADDTOCART", product: product });
    }
    dispatch({ type: "SINGLE_TOTAL", id: id });
  };

  // OPEN MODAL
  const openModal = () => {
    dispatch({ type: "OPENMODAL" });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSEMODAL" });
  };

  const openProduct = (id: number) => {
    openModal();
    const modalProd = state.storeData.find((product) => product.id === id);
    if (modalProd) dispatch({ type: "MODALPRODUCT", modalProd: modalProd });
  };

  const increase = (id: number) => {
    dispatch({ type: "INCREASE", id: id });
    dispatch({ type: "SINGLE_TOTAL", id: id });
  };

  const decrease = (id: number) => {
    dispatch({ type: "DECREASE", id: id });
    dispatch({ type: "SINGLE_TOTAL", id: id });
  };

  const remove = (id: number) => {
    dispatch({ type: "REMOVE", id: id });
    dispatch({ type: "SINGLE_TOTAL", id: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <globalContext.Provider
      value={{
        state,
        handleDetail,
        addToCart,
        openProduct,
        closeModal,
        increase,
        decrease,
        remove,
        clearCart,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
