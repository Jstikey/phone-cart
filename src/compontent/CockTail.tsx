import { FC } from "react";
import { cockTailProps } from "./cockTailProps";
import { NavLink } from "react-router-dom";

export const CockTail: FC<cockTailProps> = ({
  strAlcoholic,
  strDrink,
  strDrinkThumb,
  strGlass,
  idDrink,
}) => {
  return (
    <article className="cock">
      <div className="img-container">
        <img src={strDrinkThumb} alt="" className="cock-image" />
      </div>
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <p>{idDrink}</p>
        <NavLink className="details" to={`/cocktail/${idDrink}`}>
          Details
        </NavLink>
      </div>
    </article>
  );
};
