import React, { useState } from "react";
import AddTxn from "./AddTxn";

const Add = ({ addingTxn , expense, income, totalBal}) => {
  const [addBtn, setaddBtn] = useState(false);

  return (
    <div>
      <div className="balance">
        <div className="row">
          <p>Balance:${totalBal}</p>
          <button
            onClick={() => {
              setaddBtn(!addBtn);
            }}
          >
            {addBtn ? "CANCLE" : "ADD"}
          </button>
        </div>
        {addBtn && <AddTxn setaddBtn={setaddBtn} addingTxn={addingTxn} />}
        <div className="expenseBox">
          <div className="expense">
            <span className="heading">Expense</span>
            <span className="rupees">${expense}</span>
          </div>
          <div className="income">
            <span className="heading">Income</span>
            <span className="rupees">${income}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
