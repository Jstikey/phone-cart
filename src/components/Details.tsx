import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../contextFolder/context";
export const Details = () => {
  const context = useGlobalContext();
  const { state } = context;
  const { details } = state;
  const { img, info, price, company, title } = details || {};

  // const { img, id, info } = details

  return (
    <section className="details-container">
      <h1>{title}</h1>
      <div className="details">
        <div className="detail-image">
          <img src={img} alt="" />
        </div>
        <div className="detail-infor">
          <h2>made by : {company}</h2>
          <h3>price : ${price}</h3>
          <article>
            <h5>some infor about the product</h5>
            <p>{info}</p>
          </article>
          <article className="detail-link">
            <NavLink to="/">back to product</NavLink>
            <button>Add to cart</button>
          </article>
        </div>
      </div>
    </section>
  );
};
