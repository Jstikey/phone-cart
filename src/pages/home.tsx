import { CockTailLIst } from "../compontent/cockTailList";
import { SearchForm } from "../compontent/searchForm";

export const Home = () => {
  return (
    <div className="section">
      <SearchForm />
      <CockTailLIst />
    </div>
  );
};
