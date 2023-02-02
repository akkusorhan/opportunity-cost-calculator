import React from 'react'
import './App.css'
import TickerInput from './components/TickerInput';

function App() {
  const [symbolInput, setSymbolInput] = React.useState("");
  const [symbolList, setSymbolList] = React.useState([])
  const [stockData, setStockData] = React.useState([]);
  const [symbolData, setSymbolData] = React.useState([])


  return (
    <>
    <TickerInput 
      symbolInput={symbolInput} 
      setSymbolInput={setSymbolInput} 
      symbolList={symbolList}
      setSymbolList={setSymbolList}
      stockData={stockData}
      setStockData={setStockData}
      symbolData={symbolData}
      setSymbolData={setSymbolData}
    />
    
    </>
  )
}

export default App
