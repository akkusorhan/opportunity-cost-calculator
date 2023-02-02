import React from "react";

function StockPrice (props) {
    const [stockData, setStockData] = React.useState({
        symbol: null,
        price: null, 
        date: null
    })
    React.useEffect(() => {
        fetch(`https://api.polygon.io/v1/open-close/${props.symbol}/2022-10-16?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`)
        .then(response => response.json())
        .then(data => {
            setStockData({
                symbol: data.symbol,
                price: data.close,
                date: data.from
            })
            console.log(data)
        })
      .catch(error => console.log(error));

    }, [props.symbol])
    return (
        <div>
            {stockData ? `closing price for ${stockData.symbol} on ${stockData.date} is $${stockData.price}` : "add stock to list"}
        </div>
    )
}

export default StockPrice;