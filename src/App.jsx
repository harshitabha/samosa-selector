import { useState } from 'react';
import './App.css';
import Option from './Option.jsx';

function App() {
  const [samosaCount, setSamosa] = useState(0)
  const [multiplier, setMultiplier] = useState(1)
  const [errMsg, setErrMsg] = useState(null)
  const updateCount = () => setSamosa(samosaCount + multiplier)

  function handleOptionClick(newMult) {
    console.log("ihih")
    setMultiplier(newMult);
    delCount();
  }

  const delCount = () => {
    let myMult = 1
    let myCost = 0
    if (samosaCount >= 10) {
      myMult = 2
      myCost = 10
    }
    if (samosaCount >= 100) {
      myMult = 5
      myCost = 100
    }
    if (samosaCount >= 1000) {
      myMult = 10
      myCost = 1000
    }
    if (samosaCount < 10) {
      setErrMsg("Need More Samosas!!")
      return; //leave dont set err msg to null
    }
    setMultiplier(myMult)
    setSamosa(samosaCount - myCost) 
    setErrMsg(null)
  }

  return (
    <>
      <p className="title">Samosa Selector</p>
      <div className="info">
        <h2 className="count">Count: {samosaCount}</h2>
        <h2 className="mult">Multipler: {multiplier}</h2>
        {errMsg && <h3 className="err-msg">{errMsg ? `Error: ${errMsg}`:null}</h3>}
      </div>
      <img src = "https://png.pngtree.com/png-vector/20221204/ourmid/pngtree-samosa-food-vector-png-image_6506630.png" 
      onClick = {updateCount}></img>

      <div className="options-div">

      </div>

      <div className="upgrade">
        <Option 
          optionName = "Double Stuffed"
          multiplier = {2}
          cost = {10} 
          onClick = {() => handleOptionClick(2)}/>

        <Option 
          optionName = "Party Pack"
          multiplier = {5}
          cost = {100} 
          onClick = {() => handleOptionClick(5)}/>
        
        <Option
          optionName = "Full Feast"
          multiplier = {10}
          cost = {1000} 
          onClick = {() => handleOptionClick(10)}/>
      </div>
        
    </>
  );
}

export default App
