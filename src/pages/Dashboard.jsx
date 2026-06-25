import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import { useState } from "react";
import { useEffect } from "react";

function Dashboard() {
    const [transactions, setTransactions] = useState(()=>{
      const savedTransactions = localStorage.getItem("transactions");
      return savedTransactions ? JSON.parse(savedTransactions) : [];
    });

    const addTransaction = (newTransaction) => {
    setTransactions([...transactions,newTransaction]);
    };

    const deleteTransaction = (id) => {
      setTransactions(
        transactions.filter((transaction) => transaction.id !== id)
      );
    };

    useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
      );
      }, [transactions]);

  return (
    <div>
        <Navbar />
        <SummaryCards transactions = {transactions}/>
        <TransactionForm addTransaction={addTransaction}/>
        <TransactionList transactions={transactions} deleteTransaction={deleteTransaction}/>
    </div>
  );
}

export default Dashboard;
