import { cockTailProps } from "./cockTailProps";
import { initialStateProps } from "./cockTailProps";

type Action =
  | { type: "SEACHTERM"; text: string }
  | { type: "LOADING" }
  | { type: "FETCH"; data: cockTailProps[] }
  | { type: "ERROR" }
  | { type: "SINGLELOADING" }
  | { type: "SINGLEFETCH"; singleData: cockTailProps }
  | { type: "SINGLEERROR" };

export const reducer = (state: initialStateProps, action: Action) => {
  switch (action.type) {
    case "SEACHTERM":
      return { ...state, searchTerm: action.text };
    case "LOADING":
      return { ...state, Loading: true };
    case "FETCH":
      return {
        ...state,
        cocktailData: action.data ? action.data : [],
        Loading: false,
      };
    case "ERROR":
      return { ...state, Loading: false };
    case "SINGLELOADING":
      return { ...state, singleLoading: true };
    case "SINGLEFETCH":
      return { ...state, singleData: action.singleData, singleLoading: false };
    case "SINGLEERROR":
      return { ...state, sinlgeLoading: false };
    default:
      return state;
  }
};
