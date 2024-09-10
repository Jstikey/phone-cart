import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../contextFolder/context";
import { useEffect } from "react";

export const Modal = () => {
  const context = useGlobalContext();
  const { state, closeModal } = context;
  const { isModal, modalProduct } = state;
  const { img, title, price } = modalProduct || {};

  //
  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModal]);

  //
  if (!isModal) return null;
  return (
    <div className="modal-container">
      <div className="modal">
        <h2>Item Added To Cart</h2>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <h4>${price}</h4>
        <NavLink to="/" className="detail-btn" onClick={closeModal}>
          continue shopping
        </NavLink>
        <NavLink to="/cart" className="detail-btn" onClick={closeModal}>
          go to cart
        </NavLink>
      </div>
    </div>
  );
};
