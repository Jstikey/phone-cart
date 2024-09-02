import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import cartItems from "../src/data";
import { reducer } from "./reducer";

interface childrenProps {
  children: ReactNode;
}

interface AppContextProps {
  state: reducerProps;
  clearCart: () => void;
  removeItem: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  getTotal: () => void;
}

export interface cartProps {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
}
export interface reducerProps {
  cart: {
    id: number;
    title: string;
    price: number;
    img: string;
    amount: number;
  }[];
  loading: boolean;
  total: number;
  amount: number;
}

const initialState: reducerProps = {
  cart: cartItems,
  loading: false,
  total: 0,
  amount: 0,
};

const url = "http://localhost:3001";

const AppContext = createContext<AppContextProps | undefined>(undefined);

//Global Context
export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("usevontjfsjkdfj");
  }
  return context;
};
//
export const AppGlobalContext: FC<childrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", id: id });
  };

  const increase = (id: number) => {
    dispatch({ type: "INCREASE", id: id });
  };
  const decrease = (id: number) => {
    dispatch({ type: "DECREASE", id: id });
  };

  const getTotal = () => {
    dispatch({ type: "TOTAL" });
  };

  useEffect(() => {
    getTotal();
  }, []);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const res = await fetch(url, {
        headers: {
          "Cache-control": "no-cache",
          pragma: "no-cache",
        },
      });

      if (!res.ok) {
        throw new Error("Network was bad");
      }
      const data: cartProps[] = await res.json();
      console.log(data);
      dispatch({ type: "FETCHDATA", data: data });
    } catch (error) {
      console.log("fetch data error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        state,
        clearCart,
        removeItem,
        increase,
        decrease,
        getTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
