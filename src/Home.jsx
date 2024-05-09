import React, {useEffect, useState} from 'react'
import Add from './Add'
import List from './List'

const Home = () => {
  const [transaction, settarnsaction] = useState([])
  const [expense, setexpense] = useState(0)
  const [income, setincome] = useState(0)
  const [totalBal, settotalBal] = useState(0)


  const addingTxn = (payload) =>{
    const txnArray = [...transaction];
    txnArray.push(payload);
    settarnsaction(txnArray)
    
  }

  const calculateBalance = () =>{
    let exp = 0;
    let inc = 0;
    let totalBalance = 0;
    transaction.map((payload)=>{
      payload.type === "EXPENSE" ? exp = exp + payload.amount : inc = inc + payload.amount
    })
    totalBalance = inc - exp;
    settotalBal(totalBalance);
    setexpense(exp)
    setincome(inc)

  }

  useEffect(()=>{
    calculateBalance();
  }, [transaction])
  return (
    <div className='main2'>
      
      <Add addingTxn={addingTxn} expense={expense} income={income} totalBal={totalBal}/>
      <List transaction={transaction}/>
    </div>
  )
}

export default Home
