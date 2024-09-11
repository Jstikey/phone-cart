import { NavLink } from "react-router-dom";

export const Default = () => {
  console.log();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        flexDirection: "column",
        height: "94.5vh",
        border: "1px solid black",
        gap: "1rem",
      }}
    >
      <h3>page not found</h3>
      <NavLink to="/" className="detail-btn">
        Home
      </NavLink>
    </div>
  );
};
