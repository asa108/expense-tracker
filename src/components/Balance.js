import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

// 入力された金額を足し算する
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  // toFixed(2)で小数点２の位まで表示する
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};

// racf
