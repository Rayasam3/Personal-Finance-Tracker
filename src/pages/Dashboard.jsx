import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import { useState } from "react";
function Dashboard() {
    const [transactions, setTransactions] = useState([]);
  return (
    <div>
        <Navbar />
        <SummaryCards />
        <TransactionForm />
        <TransactionList transactions={transactions} />
    </div>
  );
}

export default Dashboard;
