function TransactionList({transactions}) {
  return (
    <div>
        <h2>Transactions</h2>
        <p>Total Transactions: {transactions.length}</p>
        {
          transactions.length === 0 ?(
            <p>No Transactions Added Yet.</p>
          ) : (transactions.map((transaction, index) => (
            <div key ={index}>
              <h3>{transaction.title}</h3>
              <p>Amount: ₹{transaction.amount}</p>
              <p>Category: {transaction.category}</p>
              <p>Type: {transaction.type}</p>
              <hr />
            </div>
            ))
          )
        }
    </div>
  );
}

export default TransactionList
