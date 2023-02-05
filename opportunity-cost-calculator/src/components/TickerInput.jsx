import React from "react";

function TickerInput({ 
        symbolInput, 
        setSymbolInput, 
        symbolList, 
        setSymbolList, 
        stockData, 
        setStockData
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

        for (let i = 0; i < symbolList.length; i++) {

            const stockTicker = symbolList[i].ticker
            console.log(stockTicker);

            function submittedStockSymbol ()  {
                fetch(`https://api.polygon.io/v1/open-close/${stockTicker}/2022-04-14?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`)
                .then(response => response.json())
                .then(data => {
                    //setStockData(prev => [...prev, data])
                })
                .catch(error => console.log(error))
            } 
            submittedStockSymbol();
        }
        setSymbolList([])
        console.log(stockData)
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

        {stockData.length != 0 ? <p>{stockData.close}</p> : <p>waiting for submit</p>}

        

        
        </>
    )
}

export default TickerInput;