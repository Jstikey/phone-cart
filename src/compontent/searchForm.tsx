import { useRef } from "react";
import { useGlobalContext } from "./context";

export const SearchForm = () => {
  //
  const context = useGlobalContext();
  const { state, handleChange } = context;
  const { searchTerm } = state;

  const inputRef = useRef(null);

  //
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="search"> search your favourite cocktail</label>
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          id="search"
          value={searchTerm}
          ref={inputRef}
        />
      </div>
    </form>
  );
};
