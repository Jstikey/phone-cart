import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../contextFolder/context";
import { Table } from "./table";

export const Cart = () => {
  const context = useGlobalContext();
  const { state, clearCart } = context;
  const { cart } = state;

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
            <h4>subtotal: ${1}</h4>
            <h4>tax: ${1}</h4>
            <h4>total: ${35.2}</h4>
          </article>
        </div>
      )}
    </div>
  );
};
