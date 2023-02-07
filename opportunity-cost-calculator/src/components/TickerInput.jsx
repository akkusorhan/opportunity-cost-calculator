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
        setAmountSavedInput
        
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

        for (let i = 0; i < symbolList.length; i++) {

            const stockTicker = symbolList[i].ticker
            console.log(stockTicker);

            async function submittedStockSymbol ()  {
                //creating todays date - make sure to change this later - returns tuesday of the previous week as formattedDate
                const today = new Date();
                const dayOfWeek = today.getUTCDay();
                if (dayOfWeek === 1) {
                // 1 is Monday
                today.setDate(today.getDate() + 1);
                } else if (dayOfWeek === 0 || dayOfWeek === 6) {
                // 0 is Sunday, 6 is Saturday
                today.setDate(today.getDate() - (dayOfWeek + 2));
                } else if (dayOfWeek === 3) {
                    today.setDate(today.getDate() - 1);
                } else if (dayOfWeek === 4) {
                    today.setDate(today.getDate() - 2);
                } else if (dayOfWeek === 5) {
                    today.setDate(today.getDate() - 3);
                } else {
                
                }
                const year = today.getFullYear();
                const month = (today.getMonth() + 1).toString().padStart(2, '0');
                const day = today.getDate().toString().padStart(2, '0');
                const formattedDate = `${year}-${month}-${day}`;


                


                const apiCall1 = await fetch(`https://api.polygon.io/v1/open-close/${stockTicker}/${timeHorizon}?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`)
                const response1 = await apiCall1.json()

                const apiCall2 = await fetch(`https://api.polygon.io/v1/open-close/${stockTicker}/${formattedDate}?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`)
                const response2 = await apiCall2.json()

                //note to future self: use the space below to save the two api calls data to StockData state
                const apiCallResult = {
                    symbol: response1.symbol,
                    pastDate: timeHorizon,
                    currentDate: formattedDate,
                    pastPrice: response1.close,
                    currentPrice: response2.close,
                    amountInvested: amountSaved,
                    rateOfChange: response1.close > response2.close ? ((response1.close - response2.close) / response1.close * -100) / 100 : ((response2.close - response2.close) / response1.close * 100) / 100,
                    profitLoss: response1.close > response2.close ? (((response1.close - response2.close) / response1.close * -100) / 100) * amountSaved : (((response2.close - response1.close) / response1.close * 100) / 100) * amountSaved
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
        setAmountSavedInput("")
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

        {stockData.map(item => 
        <>
            <p>{item.pastPrice > item.currentPrice ? "losses" : "gains"} for stock {item.symbol} from {item.pastDate} to {item.currentDate}: ${Math.floor(item.profitLoss)}</p>
            <br/>
            <p>invested amount: ${item.amountInvested}</p>
            <p>____________________________________</p>

        </>
        )}

        {stockData.length != 0 ? "" : <p>waiting for submit</p>}

        

        
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