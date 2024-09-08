import { stateProps } from "./props";

type Action = { type: "SHOWDETAILS"; id: number };
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
    default:
      return state;
  }
};
