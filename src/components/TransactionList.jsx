import "../styles/TransactionList.css";

function TransactionList({transactions,deleteTransaction,searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedType,
  setSelectedType, setEditingTransaction,}) {
  return (
    <div className="card transaction-list">
        <h2>Transactions</h2>
        <div>
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) =>
            setSearchTerm(e.target.value)
            }
          />
        </div>
        <br />

        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(e.target.value)
          }
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Travels">Travels</option>
          <option value="Shopping">Shopping</option>
          <option value="Salary">Salary</option>
          <option value="Others">Others</option>
        </select>
        <br /><br />
        <select
          value={selectedType}
          onChange={(e) =>
            setSelectedType(e.target.value)
          }
        >
          <option value="All">All Types</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <br /><br />

        <p>Total Transactions: {transactions.length}</p>
        {
          transactions.length === 0 ?(
            <p>No Transactions Added Yet.</p>
          ) : (transactions.map((transaction) => (
            <div key ={transaction.id} className={`transaction-item ${ transaction.type === "Income" ? "income" : "expense" }`}  >
              <h3>{transaction.title}</h3>
              <p>Amount: ₹{transaction.amount}</p>
              <p>Category: {transaction.category}</p>
              <p>Type: {transaction.type}</p>
              <button onClick={() => setEditingTransaction(transaction)}>Edit</button>
              <button onClick={()=>deleteTransaction(transaction.id)}>Delete</button>
              <hr />
            </div>
            ))
          )
        }
    </div>
  );
}

export default TransactionList
