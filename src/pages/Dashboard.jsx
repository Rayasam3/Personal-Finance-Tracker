import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import { useState } from "react";
import { useEffect } from "react";

function Dashboard() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [ selectedType, setSelectedType] =  useState("All");

    const [editingTransaction, setEditingTransaction] = useState(null);

    const [sortOption, setSortOption] = useState("latest");

    const [transactions, setTransactions] = useState(()=>{
      const savedTransactions = localStorage.getItem("transactions");
      return savedTransactions ? JSON.parse(savedTransactions) : [];
    });

    const addTransaction = (newTransaction) => {
    setTransactions([...transactions,newTransaction]);
    };

    const filteredTransactions = transactions.filter((transaction) => {
      const matchesSearch = transaction.title.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === "All" || transaction.category === selectedCategory;
      
      const matchesType = selectedType === "All" ||
      transaction.type === selectedType;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesType
    );
    });

    
    const sortedTransactions = [...filteredTransactions,];
    if (sortOption === "latest") {
      sortedTransactions.reverse();
    }

    if (sortOption === "highest") {
      sortedTransactions.sort(
        (a, b) => b.amount - a.amount
      );
    }

    if (sortOption === "lowest") {
      sortedTransactions.sort(
        (a, b) => a.amount - b.amount
      );
    }

    const deleteTransaction = (id) => {
      setTransactions(
        transactions.filter((transaction) => transaction.id !== id)
      );
    };

    const updateTransaction = (updatedTransaction) => {
      setTransactions(
        transactions.map((transaction) =>
          transaction.id === updatedTransaction.id
            ? updatedTransaction : transaction
          )
        );

        setEditingTransaction(null);
      };

    useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
      );
      }, [transactions]);

  return (
    <div className="container">
        <Navbar />
        <div className="card">
        <SummaryCards transactions = {transactions}/>
        </div>

        <div className="card"><TransactionForm
          addTransaction={addTransaction}
          editingTransaction={editingTransaction}
          updateTransaction={updateTransaction}
        /></div>
        <div className="card"><TransactionList
          transactions={sortedTransactions}
          deleteTransaction={deleteTransaction}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          setEditingTransaction={setEditingTransaction}
          sortOption={sortOption}
          setSortOption={setSortOption}
          /></div>
        
    </div>
  );
}

export default Dashboard;
