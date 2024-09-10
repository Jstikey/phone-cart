import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";
import { Details } from "./components/Details";
import { Cart } from "./components/Cart";
import { Default } from "./components/Default";
import { Modal } from "./components/Modal";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/details/:phoneid" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Default />} />
      </Routes>
      <Modal />
    </>
  );
};

export default App;
