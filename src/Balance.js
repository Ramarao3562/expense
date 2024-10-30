// src/components/Balance.js
import React from "react";

function Balance({ transactions }) {
  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
}

export default Balance;
