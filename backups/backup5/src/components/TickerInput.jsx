import React from "react";

function TickerInput({ 
        symbolInput, 
        setSymbolInput, 
        symbolList, 
        setSymbolList, 
        timeHorizon, 
        setTimeHorizon, 
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
            ...prev,
            list
        ])

        setSymbolInput("");
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

        </>
    )
}

export default TickerInput;