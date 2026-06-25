function TransactionList({transactions,deleteTransaction,}) {
  return (
    <div>
        <h2>Transactions</h2>
        <p>Total Transactions: {transactions.length}</p>
        {
          transactions.length === 0 ?(
            <p>No Transactions Added Yet.</p>
          ) : (transactions.map((transaction) => (
            <div key ={transaction.id}>
              <h3>{transaction.title}</h3>
              <p>Amount: ₹{transaction.amount}</p>
              <p>Category: {transaction.category}</p>
              <p>Type: {transaction.type}</p>
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
