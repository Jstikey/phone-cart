import { useParams } from "react-router-dom";
import { useGlobalContext } from "../compontent/context";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Loader } from "../compontent/loading";

export const SingleCockTail = () => {
  const context = useGlobalContext();
  const { singleFetch, state } = context;
  const { singleData, singleLoading } = state;

  const { id } = useParams();

  useEffect(() => {
    if (id) singleFetch(id);
  }, [id]);

  if (singleLoading) {
    return <Loader />;
  }

  if (!singleData) {
    return <h2>no cocktail to display</h2>;
  }

  const {
    strAlcoholic,
    strDrink,
    strDrinkThumb,
    strGlass,
    strIngredient1,
    strIngredient2,
    strInstructions,
    strIngredient3,
  } = singleData;
  return (
    <>
      {singleData && (
        <article className="single-cocktail">
          <NavLink className="details " to="/">
            Back Home
          </NavLink>
          <h3>{strDrink}</h3>
          <div className="drink">
            <img className="singeCock-img" src={strDrinkThumb} alt="" />
            <div className="drink-info">
              <h4>{strGlass}</h4>
              <h3>{strAlcoholic}</h3>
              <p>{strInstructions}</p>
              <p>
                <span>ingredient1 :</span> {strIngredient1}
              </p>
              <p>
                <span>ingredient2 :</span> {strIngredient2}
              </p>
              <p>
                <span>ingredient3 :</span> {strIngredient3}
              </p>
            </div>
          </div>
        </article>
      )}
    </>
  );
};
