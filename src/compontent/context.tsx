import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { reducer } from "./reducer";
import {
  cockTailProps,
  contextValueProps,
  globalContextProps,
  initialStateProps,
} from "./cockTailProps";

const initialState: initialStateProps = {
  Loading: false,
  searchTerm: "a",
  cocktailData: [],
  singleLoading: false,
  singleData: null,
};

const globalContext = createContext<contextValueProps | null>(null);

//Global Context
export const useGlobalContext = () => {
  const context = useContext(globalContext);
  if (context === null) {
    throw new Error("not defined ");
  }
  return context;
};

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const AppGlobalContext: FC<globalContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (text: string) => {
    dispatch({ type: "SEACHTERM", text });
  };

  const fetchDrinks = useCallback(async () => {
    dispatch({ type: "LOADING" });
    try {
      const res = await fetch(`${url}${state.searchTerm}`);
      if (!res.ok) {
        throw new Error("error fetching");
      }
      const result = await res.json();
      const data: cockTailProps[] = result.drinks || [];
      dispatch({ type: "FETCH", data: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "ERROR" });
    }
  }, [state.searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [state.searchTerm, fetchDrinks]);

  const singleFetch = async (id: string) => {
    dispatch({ type: "SINGLELOADING" });
    try {
      const res = await fetch(`${singleUrl}${id}`);
      if (!res.ok) {
        throw new Error("Error loading single cocktail");
      }

      const response = await res.json();
      const singleData: cockTailProps = response.drinks ? response.drinks : {};

      console.log(singleData);
      dispatch({ type: "SINGLEFETCH", singleData: singleData });
    } catch (error) {
      dispatch({ type: "SINGLEERROR" });
    }
  };

  return (
    <globalContext.Provider value={{ state, handleChange, singleFetch }}>
      {children}
    </globalContext.Provider>
  );
};
