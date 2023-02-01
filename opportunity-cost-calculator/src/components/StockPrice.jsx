import React from "react";

function StockPrice (props) {
    const [symbol, setSymbol] = React.useState(null)
    const [price, setPrice] = React.useState(null);

    React.useEffect(() => {
        fetch(`https://api.polygon.io/v1/open-close/${props.symbol}/2022-06-14?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`)
        .then(response => response.json())
        .then(data => {
        setSymbol(data.symbol);
        setPrice(data.close)
      })
      .catch(error => console.log(error));

      console.log()

    }, [props.symbol])
    return (
        <div>
            {price ? `closing price for ${symbol} is $${price}` : "add stock to list"}
        </div>
    )
}

export default StockPrice;