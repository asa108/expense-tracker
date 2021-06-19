import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transacrion }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transacrion.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={transacrion.amount < 0 ? "minus" : "plus"}>
        {transacrion.text}{" "}
        <span>
          {sign}${Math.abs(transacrion.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transacrion.id)}
        >
          x
        </button>
      </li>
    </div>
  );
};
