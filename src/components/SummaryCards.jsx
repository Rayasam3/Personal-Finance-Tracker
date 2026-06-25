import "../styles/SummaryCards.css";


function SummaryCards({ transactions}) {
  const totalIncome = transactions.filter((transaction) => transaction.type === "Income").reduce((sum, transaction) => sum + transaction.amount, 0);

  const totalExpense = transactions.filter((transaction) => transaction.type === "Expense").reduce((sum, transaction) => sum + transaction.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="card">
        <h1>Summary</h1>
      <div className="summary-container">
        <div className="summary-box">
          <h3>Total Income</h3>
          <p>₹{totalIncome}</p>
        </div>
        <div className="summary-box">
          <h3>Total Expense</h3>
          <p>₹{totalExpense}</p>
        </div>
        <div className="summary-box">
          <h3>Current Balance</h3>
          <p>₹{balance}</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryCards;
