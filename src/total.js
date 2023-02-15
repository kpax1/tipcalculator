import React from "react";

function Input1(props){
    return(
        <div> {props.pplerror}</div>
      <div>
      <p> Tip Amount /person: {props.tipAmount=== 'NaN' || tipAmount==='Infinity' ? '0.00' : tipAmount}</p>
      <p> Total /person {TotalPerson === 'NaN' || TotalPerson==='Infinity' ? '0.00' : TotalPerson}</p>
      </div>
    )
}

export default total;