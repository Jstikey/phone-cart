import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import { FaShoppingCart } from "react-icons/fa";
export const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/">products</NavLink>
          </li>
        </ul>
      </div>
      <NavLink to="/cart" className="cart">
        <FaShoppingCart />
        cart
      </NavLink>
    </nav>
  );
};
