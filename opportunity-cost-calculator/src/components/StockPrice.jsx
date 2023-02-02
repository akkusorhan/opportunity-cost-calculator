import React from "react";

function StockPrice (props) {
    const [symbol, setSymbol] = React.useState(null)
    const [price, setPrice] = React.useState(null);

    const [stockData, setStockData] = React.useState({
        symbol: null,
        price: null, 
        date: null
    })
    React.useEffect(() => {
        fetch(`https://api.polygon.io/v1/open-close/${props.symbol}/2022-10-14?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`)
        .then(response => response.json())
        .then(data => {
            setStockData({
                symbol: data.symbol,
                price: data.close,
                date: data.from
            })
            setSymbol(data.symbol);
            setPrice(data.close)
            console.log(data)
        })
      .catch(error => console.log(error));

    }, [props.symbol])
    return (
        <div>
            {price ? `closing price for ${stockData.symbol} on ${stockData.date} is $${stockData.price}` : "add stock to list"}
        </div>
    )
}

export default StockPrice;