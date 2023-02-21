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
            <h1 className="hero-main-text">Calculate Your Spending <br />Opportunity Cost.</h1>
            <h3>See your spending dollars invested, over time, in your favorite stocks.</h3>
            <hr />
            <h2>Over the last </h2>

            <DateInput
                timeHorizon={timeHorizon}
                setTimeHorizon={setTimeHorizon}
                timeHorizonInput={timeHorizonInput}
                setTimeHorizonInput={setTimeHorizonInput}
            />
            <AmountSaved
                amountSaved={amountSaved}
                setAmountSaved={setAmountSaved}
                amountSavedInput={amountSavedInput}
                setAmountSavedInput={setAmountSavedInput}
            />
            <br />
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