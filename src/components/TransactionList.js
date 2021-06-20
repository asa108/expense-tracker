import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

import { Transaction } from "./Transaction";

// 取引履歴
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  // save data to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  });

  // ※show data
  useEffect(() => {
    const trans = JSON.parse(localStorage.getItem("transactions"));
  });

  console.log("transactions", transactions);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transacrion) => (
          <Transaction key={transacrion.id} transacrion={transacrion} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
