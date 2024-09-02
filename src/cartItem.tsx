import { FC } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

interface items {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
}

interface stateItems {
  removeItem: (id: number) => void;
  item: items;
  increase: (id: number) => void;
  decrease: (id: number) => void;
}

export const CartItem: FC<stateItems> = ({
  item: { id, title, price, img, amount },
  removeItem,
  increase,
  decrease,
}) => {
  return (
    <article key={id} className="cart-item">
      <div className="item-img">
        <img src={img} alt="" />
      </div>
      <div className="item-info">
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button onClick={() => removeItem(id)} className="remove-btn">
          remove
        </button>
      </div>
      <aside className="buttonUpDown">
        <button onClick={() => increase(id)}>
          <MdOutlineKeyboardArrowUp />
        </button>
        <p>{amount}</p>
        <button onClick={() => decrease(id)}>
          <MdOutlineKeyboardArrowDown />
        </button>
      </aside>
    </article>
  );
};
