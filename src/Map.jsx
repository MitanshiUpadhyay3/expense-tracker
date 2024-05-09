import React from 'react'

const Map = (props) => {
  const isExpense= props.payload?.type === "EXPENSE"
  return (
 
      <div className="list"  style={{borderRight: `4px solid ${isExpense ? "red" : "green" }`}}>
        <span className="description">
          {props.payload.desc}
        </span>
        <span className="description">
          ${props.payload.amount}
        </span>
      </div>

  )
}

export default Map
