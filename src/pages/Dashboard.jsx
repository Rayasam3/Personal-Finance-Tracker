import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
function Dashboard() {
  return (
    <div>
        <Navbar />
        <SummaryCards />
        <TransactionForm />
        <TransactionList />
    </div>
  );
}

export default Dashboard;
