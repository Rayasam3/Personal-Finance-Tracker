
function SummaryCards({ transactions}) {
  const totalIncome = transactions.filter((transaction) => transaction.type === "Income").reduce((sum, transaction) => sum + transaction.amount, 0);

  const totalExpense = transactions.filter((transaction) => transaction.type === "Expense").reduce((sum, transaction) => sum + transaction.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div>
        <h1>Summary</h1>

        <div>
            <h3>Total Income</h3>
            <p>₹{totalIncome}</p>
        </div>
        <div>
        <h3>Total Expense</h3>
        <p>₹{totalExpense}</p>
      </div>
      <div>
        <h3>Current Balance</h3>
        <p>₹{balance}</p>
      </div>
    </div>
  );
}

export default SummaryCards;
