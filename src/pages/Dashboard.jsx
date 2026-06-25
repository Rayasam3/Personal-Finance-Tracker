import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import { useState } from "react";

function Dashboard() {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (newTransaction) => {
    setTransactions([...transactions,newTransaction]);
    };

    const deleteTransaction = (id) => {
      setTransactions(
        transactions.filter((transaction) => transaction.id !== id)
      );
    };

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
