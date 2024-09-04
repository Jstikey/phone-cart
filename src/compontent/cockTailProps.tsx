import { ReactNode } from "react";

export interface cockTailProps {
  strAlcoholic: string;
  idDrink: string;
  strDrinkThumb: string;
  strDrink: string;
  strGlass: string;
  strInstructions: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
}

// Global context interface
export interface globalContextProps {
  children: ReactNode;
}

export interface initialStateProps {
  Loading: boolean;
  searchTerm: string;
  singleLoading: boolean;
  singleData: cockTailProps | null;
  cocktailData: cockTailProps[];
}
export interface contextValueProps {
  state: initialStateProps;
  handleChange: (text: string) => void;
  singleFetch: (id: string) => Promise<void>;
}
