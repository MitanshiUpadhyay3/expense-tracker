import React, {useEffect, useState} from "react";
import Map from "./Map";

const List = (props) => {
  const [search, setsearch] = useState("")
  const [filteredTrans, setfilteredTrans] = useState(props.transaction)

  const filterData = (search) =>{
    console.log(search)
    if(!search || !search.trim().length){
      setfilteredTrans(props.transaction);
      return;
    }
    let txn = [...props.transaction];
    txn = txn.filter((payload)=>
      payload.desc.toLowerCase().includes(search.toLowerCase().trim())
  )
    console.log(txn)
    setfilteredTrans(txn)
  }


  
  

  useEffect(()=>{
    filterData(search)
  }, [props.transaction])
  
  return (
    <div className="transaction">
      <h4>Transaction</h4>
      <input type="text" placeholder="Search" onChange={(e)=>{setsearch(e.target.value) 
        filterData(e.target.value)
      }} />
      {/* {filteredTrans?.length ?
        filteredTrans.map((payload) => (<Map payload={payload} />)) : ""
      } */}

{filteredTrans?.length ? (
        filteredTrans.map((payload) => <Map key={payload.id} payload={payload} />)
      ) : (
        <p>No transactions.</p>
      )}
    </div>
  );
};

export default List;





