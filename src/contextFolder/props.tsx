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
  cart: singleProductProps[];
  isModal: boolean;
  modalProduct: singleProductProps | undefined;
  sumTotal: number;
  quantity: number;
  tax: number;
  gross: number;
}

interface contextProps {
  state: stateProps;
  handleDetail: (id: number) => void;
  addToCart: (id: number) => void;
  openProduct: (id: number) => void;
  closeModal: () => void;
  decrease: (id: number) => void;
  increase: (id: number) => void;
  remove: (id: number) => void;
  clearCart: () => void;
}
export interface GlobalContextProps {
  children: ReactNode;
}

export const globalContext = createContext<contextProps | null>(null);
