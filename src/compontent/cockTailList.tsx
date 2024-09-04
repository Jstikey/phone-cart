import { CockTail } from "./CockTail";
import { useGlobalContext } from "./context";
import { Loader } from "./loading";

export const CockTailLIst = () => {
  //
  const context = useGlobalContext();
  const { state } = context;
  const { Loading, cocktailData } = state;

  //

  if (Loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (cocktailData.length < 1) {
    return <h2 className="section-title">no cocktails match your search</h2>;
  }

  return (
    <section className="section">
      <h2>cocktail</h2>
      <div className="cocktail-section">
        {cocktailData.map((item) => (
          <CockTail key={item.idDrink} {...item} />
        ))}
      </div>
    </section>
  );
};
