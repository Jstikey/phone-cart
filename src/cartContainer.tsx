import { CartItem } from "./cartItem";
import { useGlobalContext } from "./context";

export const CartContainer = () => {
  const context = useGlobalContext();
  const { state, clearCart, removeItem, increase, decrease } = context;
  const { cart, total } = state;

  if (cart?.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  //
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <>
        {Array.isArray(cart) &&
          cart?.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeItem={removeItem}
              increase={increase}
              decrease={decrease}
            />
          ))}
      </>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            toal <span>{total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
