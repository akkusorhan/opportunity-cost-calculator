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
        setTimeHorizonInput
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
    async function submitClick() {

        for (let i = 0; i < symbolList.length; i++) {

            const stockTicker = symbolList[i].ticker
            console.log(stockTicker);

            async function submittedStockSymbol ()  {
                const apiCall1 = await fetch(`https://api.polygon.io/v1/open-close/${stockTicker}/${timeHorizon}?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`)
                const response1 = await apiCall1.json()

                const apiCall2 = await fetch(`https://api.polygon.io/v1/open-close/${stockTicker}/${timeHorizon}?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`)
                const response2 = await apiCall2.json()

                //note to future self: use the space below to save the two api calls data to StockData state
                const apiCallResult = {
                    symbol: response1.symbol,
                    pastDate: timeHorizon,
                    currentDate: timeHorizon,
                    pastPrice: response1.close,
                    currentPrice: response1.close,
                }

                setStockData(prev => [
                    ...prev, 
                    apiCallResult
                ])

            } 
            submittedStockSymbol();
        }
        setSymbolList([])
        setTimeHorizonInput("")
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


// old api call
                // fetch(`https://api.polygon.io/v1/open-close/${stockTicker}/2022-04-14?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`)
                // .then(response => response.json())
                // .then(data => {
                //     const apiCallResult = {
                //         symbol: data.symbol,
                //         currentDate: data.from,
                //         currentPrice: data.close
                //     }

                //     setStockData(prev => [
                //         ...prev, 
                //         apiCallResult
                //     ])
                // })
                // .catch(error => console.log(error))