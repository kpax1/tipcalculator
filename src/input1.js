import React from "react";
import './index.css';

function Input1(props){
    return(
        <input className='a'type='number'
      placeholder='enter a bill' 
      value={props.bill}
      onChange={(e)=> {props.setBill(e.target.valueAsNumber)}}
      />
    )
}

export default Input1;