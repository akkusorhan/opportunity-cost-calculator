import React from 'react'
import DateInput from './DateInput';
import AmountSaved from "./AmountSaved"
import TickerInput from './TickerInput';

function Hero() {
    const [symbolInput, setSymbolInput] = React.useState("");
    const [symbolList, setSymbolList] = React.useState([]);
    const [timeHorizonInput, setTimeHorizonInput] = React.useState("");
    const [timeHorizon, setTimeHorizon] = React.useState("");
    const [amountSavedInput, setAmountSavedInput] = React.useState("");
    const [amountSaved, setAmountSaved] = React.useState("");
    const [stockData, setStockData] = React.useState([]);


    return (
        <section className="hero-content">
            <h1 className="hero-main-text">Calculate Your Spending <br/>Opportunity Cost.</h1>
            <h3>See your spending dollars invested, over time, in your favorite stocks.</h3>
            <hr/>
            <h2 className="input-text">Over the last 
            <DateInput 
                timeHorizon={timeHorizon} 
                setTimeHorizon={setTimeHorizon} 
                timeHorizonInput={timeHorizonInput} 
                setTimeHorizonInput={setTimeHorizonInput} /> , I've spent 
            <AmountSaved 
                amountSaved={amountSaved}
                setAmountSaved={setAmountSaved}
                amountSavedInput={amountSavedInput}
                setAmountSavedInput={setAmountSavedInput}
            /> 
            in <br/>my checking account. </h2>
    <hr/>
    <h3>Choose the stocks you would like to see your savings invested in.</h3>
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

        </section>
    )
}

export default Hero;