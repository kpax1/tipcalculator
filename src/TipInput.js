import React from "react";

function Tipinput(props){
    return(
        <div>
            <div className="tip">
            <p> Number of People</p>

            </div>
        <input className='b' onKeyDown={(e)=>{
        if (e.key==='.'){
          e.preventDefault();
        }}}
      value={props.ppl} type='number' placeholder='0' 
      onChange={(e)=>{
        props.setPpl(e.target.value)
      }}
      />
        </div>
    )
}

export default Tipinput;