import React from 'react'
import './App.css'
import DateInput from './components/DateInput';
import AmountSaved from "./components/AmountSaved"
import TickerInput from './components/TickerInput';

function App() {
  const [symbolInput, setSymbolInput] = React.useState("");
  const [symbolList, setSymbolList] = React.useState([]);
  const [timeHorizonInput, setTimeHorizonInput] = React.useState("");
  const [timeHorizon, setTimeHorizon] = React.useState("");
  const [amountSavedInput, setAmountSavedInput] = React.useState("");
  const [amountSaved, setAmountSaved] = React.useState("");
  const [stockData, setStockData] = React.useState([]);


  return (
    <>
    <DateInput 
      timeHorizon={timeHorizon}
      setTimeHorizon={setTimeHorizon}
      timeHorizonInput={timeHorizonInput}
      setTimeHorizonInput={setTimeHorizonInput}
    />
    <br/>
    <AmountSaved 
      amountSaved={amountSaved}
      setAmountSaved={setAmountSaved}
      amountSavedInput={amountSavedInput}
      setAmountSavedInput={setAmountSavedInput}
    />
    <br/>
    <TickerInput 
      symbolInput={symbolInput} 
      setSymbolInput={setSymbolInput} 
      symbolList={symbolList}
      setSymbolList={setSymbolList}
      stockData={stockData}
      setStockData={setStockData}
      //passing amount saved
      amountSaved={amountSaved}
      setAmountSaved={setAmountSaved}
      amountSavedInput={amountSavedInput}
      setAmountSavedInput={setAmountSavedInput}
      //passing date input
      timeHorizon={timeHorizon}
      setTimeHorizon={setTimeHorizon}
      timeHorizonInput={timeHorizonInput}
      setTimeHorizonInput={setTimeHorizonInput}
    />
    </>
  )
}

export default App
