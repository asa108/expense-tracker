import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

// 取引金額を入力
export const AddTransaction = () => {
  const [text, setText] = useState("");
  console.log("text", text);
  const [amount, setAmount] = useState(0);

  // useEffect(() => {
  //   const text = JSON.stringify(localStorage.getItem("text"));
  //   if (text) {
  //     setText(text);
  //   }
  // }, [text]);

  // useEffect(() => {
  //   localStorage.setItem("text", JSON.stringify(text));
  // }, [text]);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);

    localStorage.setItem("text", JSON.stringify(text));

    setText("");
    setAmount(0);
  };

  useEffect(() => {
    const defaultValue = JSON.parse(localStorage.getItem("form"));
    setText("text", defaultValue?.text);
  }, []);

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
