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

  return (
    <div>
        <Navbar />
        <SummaryCards />
        <TransactionForm addTransaction={addTransaction}/>
        <TransactionList transactions={transactions} />
    </div>
  );
}

export default Dashboard;
