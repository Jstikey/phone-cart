import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <NavLink to="/" className=" btn btn-primary  ">
          back home
        </NavLink>
      </div>
    </section>
  );
};
