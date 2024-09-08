import { createContext, ReactNode } from "react";

export interface singleProductProps {
  id: number;
  title: string;
  img: string;
  price: number;
  company: string;
  info: string;
  inCart: boolean;
  count: number;
  total: number;
}

export interface stateProps {
  storeData: singleProductProps[];
  details: singleProductProps | undefined;
}

interface contextProps {
  state: stateProps;
  handleDetail: (id: number) => void;
  addToCart: () => void;
}
export interface GlobalContextProps {
  children: ReactNode;
}

export const globalContext = createContext<contextProps | null>(null);
