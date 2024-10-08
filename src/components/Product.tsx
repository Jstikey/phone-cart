import { FC } from "react";
import { singleProductProps } from "../contextFolder/props";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "../contextFolder/context";

interface productProps {
  product: singleProductProps;
}

export const Product: FC<productProps> = ({
  product: { id, title, img, price, inCart },
}) => {
  const context = useGlobalContext();
  const { handleDetail, addToCart, openProduct } = context;
  return (
    <article className="phone-container  ">
      <div className="image-container">
        <NavLink to={`/details/${id}`}>
          <img src={img} alt={img} onClick={() => handleDetail(id)} />
        </NavLink>
        <button
          className="incart"
          disabled={inCart}
          onClick={() => {
            addToCart(id);
            openProduct(id);
          }}
        >
          {inCart ? "incart" : <FaShoppingCart />}
        </button>
      </div>
      <div className="image-footer">
        <h3>{title}</h3>
        <h4>${price}</h4>
      </div>
    </article>
  );
};
