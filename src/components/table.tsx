import { FC } from "react";
import { singleProductProps } from "../contextFolder/props";
import { FaTrash } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useGlobalContext } from "../contextFolder/context";

interface tableProps {
  prod: singleProductProps;
}

//
export const Table: FC<tableProps> = ({
  prod: { img, title, price, count, id, total },
}) => {
  const context = useGlobalContext();
  const { increase, remove, decrease } = context;
  return (
    <tr>
      <td>
        <img src={img} alt="" />
      </td>
      <td>{title}</td>
      <td>${price}</td>
      <td className="quantity">
        <button onClick={() => decrease(id)}>
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button>{count}</button>
        <button onClick={() => increase(id)}>
          <MdOutlineKeyboardArrowRight />
        </button>
      </td>
      <td className="trash">
        <FaTrash onClick={() => remove(id)} />
      </td>
      <td>item total: ${total}</td>
    </tr>
  );
};
