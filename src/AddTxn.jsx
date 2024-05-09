import React, { useState } from "react";

const AddTxn = (props) => {
  const [amount, setamount] = useState('');
  const [desc, setdesc] = useState("");
  const [type, setType] = useState("INCOME");



  const addtransaction = () =>{
    // console.log({amount, desc, type})
    if(amount === 0 || desc === ""){
      alert("Please Enter valid data")
    }else{
      props.addingTxn({amount:Number(amount), desc, type, id: Date.now()})
    props.setaddBtn();
    }
  }
  return (
    <div>
      <div className="addtxn">
        <input type="number" placeholder="Enter Amount" value={amount}  onChange={(e)=>{setamount(e.target.value)}} />
        <input type="text" placeholder="Description" value={desc}  onChange={(e)=>{setdesc(e.target.value)}} />
        <div className="radiobox">
          <input
            type="radio"
            name="type"
            id="income"
            value="INCOME"
            checked={type === "INCOME"}
            onChange={(e)=>{
                setType(e.target.value)
            }}
          />
          <label htmlFor="income">Income</label>
          <input
            type="radio"
            name="type"
            id="expense"
            value="EXPENSE"
            checked={type === "EXPENSE"}
            onChange={(e)=>{
                setType(e.target.value)
            }}
          />
          <label htmlFor="expense">Expense</label>
        </div>
        <button onClick={addtransaction}>ADD</button>
      </div>
    </div>
  );
};

export default AddTxn;
