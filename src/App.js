import './App.css';
import { useEffect, useState } from 'react';
import Input1 from './input1';
import Tipinput from './TipInput';
import Result from './Result';
import Logo from './images/logo.svg'

function App() {
  const [bill, setBill] = useState(null);
  const [ppl, setPpl] = useState(null);
  const [tip, setTip] = useState(null);
  const [pplerror, setPplError] = useState('');

  const tipAmount = (bill * (tip)/ppl).toFixed(2);
  const TotalPerson = (bill *(1 + tip) / ppl).toFixed(2);

  useEffect(()=>{
    if(ppl === null|| ppl==='0'){
      setPplError("can't be zero")
    } else{
      setPplError('');
    }
  },[ppl])

  return (
    <div className='main'>
      <div className='logo'>
        <img src={Logo} /> </div>
     <div className='One'>
        <div className='mobileConteiner'>
      <p>Bill</p>
     <Input1 bill={bill} setBill={setBill}/>    <div>
      <p className='tipselect'>Select a tip %</p>
      <div className='buttons'>
      <button onClick={()=> {
        setTip(0.05);
      }}> 5% </button> 
      <button onClick={()=>{setTip(0.1)}}
      > 10% </button> 
      <button onClick={()=> {
        setTip(0.15);
      }}> 15% </button> 
      <button onClick={()=> {
        setTip(0.25);
      }}> 25% </button> 
      <button onClick={()=> {
        setTip(0.50);
      }}> 50% </button> 
          <input className='c'
      type='number' min={0} placeholder='Custom'></input>
      </div>

      </div>
    <Tipinput ppl={ppl} setPpl={setPpl}/>
    <div> {pplerror}</div>

    <Result tipAmount={tipAmount} TotalPerson={TotalPerson}  pplerror={pplerror}/>
    </div>
    </div>
      </div>
  );
}

export default App;
