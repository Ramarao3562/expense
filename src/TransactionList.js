// src/components/TransactionList.js
import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions, onDelete }) {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;