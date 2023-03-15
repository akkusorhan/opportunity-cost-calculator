import React from 'react'
import DateInput from './DateInput';
import AmountSaved from "./AmountSaved"
import TickerInput from './TickerInput';
import Submit from './Submit';
import Result from './Result';

function Hero() {
    const [symbolInput, setSymbolInput] = React.useState("");
    const [symbolList, setSymbolList] = React.useState([]);
    const [timeHorizon, setTimeHorizon] = React.useState("");
    const [amountSaved, setAmountSaved] = React.useState("");

    //test state
    const [chartData, setChartData] = React.useState([]);
    const [resultData, setResultData] = React.useState("")

    //more test state
    const [numberOfShares, setNumberOfShares] = React.useState();


    return (
        <section className="hero-content">
            <h1 className="hero-main-text">Calculate Your Spending <br />Opportunity Cost.</h1>
            <h3>See your spending dollars invested, over time, in your favorite stocks.</h3>
            <hr />
            <h2 className="input-text">Over the last   
            <DateInput
                timeHorizon={timeHorizon}
                setTimeHorizon={setTimeHorizon}
            />, I've spent 
            <AmountSaved
                amountSaved={amountSaved}
                setAmountSaved={setAmountSaved}
            /> in <br/> my personal checking account.</h2>
            <hr/>
            <h3>Choose the stocks you would like to see your savings invested in.</h3>
            <TickerInput
                symbolInput={symbolInput}
                setSymbolInput={setSymbolInput}
                symbolList={symbolList}
                setSymbolList={setSymbolList}
                //passing amount saved
                amountSaved={amountSaved}
                setAmountSaved={setAmountSaved}
                //passing date input
                timeHorizon={timeHorizon}
                setTimeHorizon={setTimeHorizon}
                //passing the test chart data state (change later)
                chartData={chartData}
                setChartData={setChartData}
            />

            <Submit 
                symbolList={symbolList}
                setSymbolList={setSymbolList}
                //passing amount saved
                amountSaved={amountSaved}
                setAmountSaved={setAmountSaved}
                //passing date input
                timeHorizon={timeHorizon}
                setTimeHorizon={setTimeHorizon}
                //passing chartdata
                chartData={chartData}
                setChartData={setChartData}
                //passing number of shares
                numberOfShares={numberOfShares}
                setNumberOfShares={setNumberOfShares}
                // passing result data'
                resultData={resultData}
                setResultData={setResultData}
            />

<Result 
                chartData={chartData}
                symbolList={symbolList}
                resultData={resultData}
            />
            

        </section>
    )
}

export default Hero;

/* <Result 
                chartData={chartData}
                symbolList={symbolList}
                resultData={resultData}
            />*/