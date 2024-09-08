import { FC, useContext, useReducer } from "react";
import { GlobalContextProps, globalContext, stateProps } from "./props";
import { reducer } from "./reducer";
import { detailProduct, storeProducts } from "../data";

const initialState: stateProps = {
  storeData: storeProducts,
  details: detailProduct,
};

export const useGlobalContext = () => {
  const context = useContext(globalContext);
  if (context === null) {
    throw new Error("context is null");
  }
  return context;
};

const addToCart = () => {
  console.log("hello from cart");
};
export const GlobalContext: FC<GlobalContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleDetail = (id: number) => {
    dispatch({ type: "SHOWDETAILS", id: id });
  };

  return (
    <globalContext.Provider value={{ state, handleDetail, addToCart }}>
      {children}
    </globalContext.Provider>
  );
};
