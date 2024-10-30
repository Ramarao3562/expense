// src/App.js
import React, { useState } from "react";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <Balance transactions={transactions} />
      <IncomeExpenses transactions={transactions} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      <AddTransaction onAdd={addTransaction} />
    </div>
  );
}

export default App;
