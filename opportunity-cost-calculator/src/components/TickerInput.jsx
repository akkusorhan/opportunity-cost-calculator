import React from "react";

function TickerInput({ 
        symbolInput, 
        setSymbolInput, 
        symbolList, 
        setSymbolList, 
        stockData, 
        setStockData, 
        timeHorizon, 
        setTimeHorizon, 
        timeHorizonInput, 
        setTimeHorizonInput, 
        amountSaved, 
        setAmountSaved, 
        amountSavedInput, 
        setAmountSavedInput,
        //test state (change later)
        chartData,
        setChartData
        
    }) {
    function addToListClick() {
        const list = {
            id: Math.random() * 100, 
            ticker: symbolInput
        }

        setSymbolList(prev => [
            ...symbolList,
            list
        ])

        setSymbolInput("");
    }

    setTimeHorizon(timeHorizonInput) //setting time horizon state before submit, dont forget this code here
    setAmountSaved(amountSavedInput) //setting amount saved state before submit, dont forget this code here

    async function submitClick() {
        const lineChartDatapoints = [{}]
        const amountSavedValue = amountSaved;
        const amountInvestedValue = amountSavedValue / symbolList.length;

        console.log(amountSavedValue, amountInvestedValue)
    }
    return (
        <>
        <input 
            type="text" 
            placeholder="add ticker to list"
            value={symbolInput}
            onChange={(e) => setSymbolInput(e.target.value)} 
            className="tickerInput"
        />
        <button onClick={addToListClick}>add to list</button>
        
        
        {symbolList.map(item => <p key={item.id}>{item.ticker}</p>)}

        <button onClick={submitClick}>submit</button>  
        </>
    )
}

export default TickerInput;