import { useState } from 'react';
import './App.css';
import Option from './Option.jsx';

function App() {
  const [samosaCount, setSamosa] = useState(0)
  const [multiplier, setMultiplier] = useState(1)
  const updateCount = () => setSamosa(samosaCount + multiplier)

  const handleOptionClick = (mult) => {

  }

  const updateMultipler = (newMult) => {
    setMultiplier(multipler * newMult);
  }
  const checkCount = () => {
    if (samosaCount >= 10) {
      myMult = 2
    }
    if (samosaCount >= 100) {
      myMult = 5
    }
    if (samosaCount >= 1000) {
      myMult = 10
    }
    updateMultipler(myMult)
    setSamosa()
  }

  return (
    <>
      <p className="title">Samosa Selector</p>
      <div className="info">
        <h2 className="count">Count: {samosaCount}</h2>
        <h2 className="mult">Multipler: {multiplier}</h2>
      </div>
      <img src = "https://png.pngtree.com/png-vector/20221204/ourmid/pngtree-samosa-food-vector-png-image_6506630.png" onClick = {updateCount}></img>

      <div className="options-div">

      </div>

      <div className="upgrade">
        <Option 
          optionName = "Double Stuffed"
          multiplier = {2}
          cost = "10" />

        <Option 
          optionName = "Party Pack"
          multiplier = {5}
          cost = "100" />
        
        <Option
          optionName = "Full Feast"
          multiplier = {10}
          cost = "1000" />
      </div>
        
    </>
  );
}

export default App
