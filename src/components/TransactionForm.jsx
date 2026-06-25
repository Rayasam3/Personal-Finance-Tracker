import { useState, useEffect } from "react";
import {v4 as uuidv4} from "uuid";

function TransactionForm({ addTransaction,editingTransaction, updateTransaction }) {
  const [title,setTitle] = useState("");
  const [amount,setAmount] = useState("");
  const [category,setCategory] = useState("Food");
  const [type, setType] = useState("Income");


  useEffect(() => {
  if (editingTransaction) {
    setTitle(editingTransaction.title);
    setAmount(editingTransaction.amount);
    setCategory(editingTransaction.category);
    setType(editingTransaction.type);
  }
  }, [editingTransaction]);


  const handleSubmit =(e)=>{
    e.preventDefault();
    const transaction = {
      title,
      amount:Number(amount),
      category,
      type,
    };
    if (editingTransaction) {
      updateTransaction({
        ...transaction,
        id: editingTransaction.id,
      });
    } else {
      addTransaction({...transaction,id:uuidv4(),});
    }

    setTitle("");
    setAmount("");
    setCategory("Food");
    setType("Income");
  };
  return (
    <div>
      <h2>Add Transaction</h2>  
      <form onSubmit={handleSubmit}>
        <div>
            <label>Title</label>
            <br />
            <input type="text" placeholder="Enter transaction Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <br />
        <div>
            <label >Amount</label>
            <br />
            <input type="number"placeholder="Enter Amount" value={amount} onChange={(e)=> setAmount(e.target.value)} />
        </div>
        <br />
        <div>
            <label >Category</label>
            <br />
            <select name="" id="" value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="Food">Food</option>
                <option value="Travels">Travels</option>
                <option value="Shopping">Shopping</option>
                <option value="Salary">Salary</option>
                <option value="Others">Others</option>
            </select>
        </div>
        <br />
        <div>
            <label htmlFor="">Type</label>
            <br />
            <select name="" id="" value={type} onChange={(e)=>setType(e.target.value)}>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
        </div>
        <br />
        <button type="submit">{editingTransaction? "Update Transaction": "Add Transaction"}</button>
      </form>
    </div>
  );
}

export default TransactionForm
