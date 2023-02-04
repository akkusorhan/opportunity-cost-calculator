import React from "react";

function TickerInput({ 
        symbolInput, 
        setSymbolInput, 
        symbolList, 
        setSymbolList, 
        stockData, 
        setStockData, 
        amountSavedInput, 
        setAmountSavedInput, 
        amountSaved, 
        setAmountSaved, 
        timeHorizonInput, 
        setTimeHorizonInput, 
        timeHorizon, 
        setTimeHorizon
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


    function submitClick() {
        //assigning state values to pass into the API call
        setAmountSaved(amountSavedInput)
        setTimeHorizon(timeHorizonInput)
        console.log(timeHorizon)




        for (let i = 0; i < symbolList.length; i++) {
            const stockTicker = symbolList[i].ticker
            console.log(stockTicker);

            function submittedStockSymbol ()  {
                fetch(`https://api.polygon.io/v1/open-close/${stockTicker}/${timeHorizon}?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`)
                .then(response => response.json())
                .then(data => {
                    setStockData(prev => [...prev, data])

                })
                .catch(error => console.log(error))
            } 
            submittedStockSymbol();
        }
        setSymbolList([])
        console.log(stockData)

        //don't forget to reset the values for date & time horizon inputs once API calls are made
        setAmountSavedInput("")
        setTimeHorizonInput("")
    }

    return (
        <>
        <input 
          type="text" 
          placeholder="add ticker to list"
          value={symbolInput}
          onChange={(e) => setSymbolInput(e.target.value)} 
        />
        <button onClick={addToListClick}>add to list</button>
        
        {symbolList.map(item => <p key={item.id}>{item.ticker}</p>)}

        <button onClick={submitClick}>submit</button>

        

        
        </>
    )
}

export default TickerInput;