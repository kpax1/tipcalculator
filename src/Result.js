
import React from "react";

function Result(props){
    return(
        <div className="result">
            <div className="tip1">
<div className="text">
<p> Tip Amount </p>
<p>/person:</p>
</div>
<div className="resulttip">
    <p className="resulttip">{props.tipAmount=== 'NaN' || props.tipAmount==='Infinity' ? '0.00' : props.tipAmount}</p>
    </div>

    </div>

    <div className="tip2">

     <div className="text">
     <p> Total </p>
<p>/person</p> 
     </div>
<div className="resulttip">
<p>{props.TotalPerson === 'NaN' || props.TotalPerson==='Infinity' ? '0.00' : props.TotalPerson}</p>
</div>

</div>
<div className="reset">
        <button> RESET </button>
</div>
</div>
    )
}

export default Result;