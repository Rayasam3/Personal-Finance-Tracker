function TransactionForm() {
  return (
    <div>
      <h2>Add Transaction</h2>  
      <form>
        <div>
            <label>Title</label>
            <br />
            <input type="text" placeholder="Enter transaction Title"/>
        </div>
        <br />
        <div>
            <label >Amount</label>
            <br />
            <input type="text"placeholder="Enter Amount" />
        </div>
        <br />
        <div>
            <label >Category</label>
            <br />
            <select name="" id="">
                <option value="">Food</option>
                <option value="">Travels</option>
                <option value="">Shopping</option>
                <option value="">Salary</option>
                <option value="">Others</option>
            </select>
        </div>
        <br />
        <div>
            <label htmlFor="">Type</label>
            <br />
            <select name="" id="">
                <option value="">Income</option>
                <option value="">Expense</option>
            </select>
        </div>
        <br />
        <button>Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm
