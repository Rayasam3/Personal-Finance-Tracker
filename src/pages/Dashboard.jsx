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
    <div>
        <Navbar />
        <SummaryCards transactions = {transactions}/>
        <TransactionForm
          addTransaction={addTransaction}
          editingTransaction={editingTransaction}
          updateTransaction={updateTransaction}
        />
        <TransactionList
          transactions={filteredTransactions}
          deleteTransaction={deleteTransaction}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          setEditingTransaction={setEditingTransaction}
          />
    </div>
  );
}

export default Dashboard;
