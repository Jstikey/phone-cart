import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../contextFolder/context";
import { Table } from "./table";
import { useState } from "react";
import { PaypalModal } from "../contextFolder/paypal";

export const Cart = () => {
  const context = useGlobalContext();
  const { state, clearCart } = context;
  const { cart, sumTotal, quantity, tax, gross } = state;
  const [checkout, setCheckout] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      {cart.length < 1 ? (
        <h1>your cart is currently empty</h1>
      ) : (
        <div className="cart-container">
          <table>
            <caption>
              <h2>
                your <span>cart</span>
              </h2>
            </caption>
            <thead>
              <tr>
                <th>product</th>
                <th>Name of product</th>
                <th>price</th>
                <th>quantity</th>
                <th>remove</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartProd, index) => (
                <Table prod={cartProd} key={index} />
              ))}
            </tbody>
          </table>
          <article id="article">
            <NavLink to="/">
              <button className="delete-btn" onClick={clearCart}>
                clear cart
              </button>
            </NavLink>
            <h4>subtotal: ${sumTotal}</h4>
            <h4>total quantity{quantity}</h4>
            <h4>tax: ${tax}</h4>
            <h4>total: ${gross}</h4>
            <button className="delete-btn" onClick={() => setCheckout(true)}>
              checkout
            </button>
          </article>
        </div>
      )}
      {checkout && <PaypalModal />}
    </div>
  );
};
