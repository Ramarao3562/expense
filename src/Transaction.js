// src/components/Transaction.js
import React from "react";

function Transaction({ transaction, onDelete }) {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => onDelete(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}

export default Transaction;
