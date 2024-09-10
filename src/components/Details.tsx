import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../contextFolder/context";
export const Details = () => {
  const context = useGlobalContext();
  const { state, addToCart } = context;
  const { details } = state;
  const { img, info, price, company, title, inCart, id } = details || {};

  // const { img, id, info } = details

  return (
    <section className="details-container">
      <h1>{title}</h1>
      <div className="details">
        <div className="detail-image">
          <img src={img} alt="" />
        </div>
        <div className="detail-infor">
          <article className="detail-price">
            <h2>
              made by : <br /> {company}
            </h2>
            <h3>price : ${price}</h3>
          </article>
          <article className="detail-para">
            <h5>some infor about the product</h5>
            <p>{info}</p>
          </article>
          <article className="detail-link">
            <NavLink to="/" className="detail-btn">
              back to product
            </NavLink>
            <button
              className="detail-btn"
              id="detail-btn"
              disabled={inCart}
              onClick={() => id && addToCart(id)}
            >
              {inCart ? "in cart" : " Add to cart"}
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};
