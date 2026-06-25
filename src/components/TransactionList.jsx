function TransactionList({transactions}) {
  return (
    <div>
        <h2>Transactions</h2>
        <p>Total Transactions: {transactions.length}</p>
        <p>No Transactions added Yet.</p>      
    </div>
  )
}

export default TransactionList
