import React from 'react'
import './App.css'
import StockPrice from './components/StockPrice'

function App() {
  //_______
  // Setting State - Stocks List
  const [stocks, setStocks] = React.useState("");
  const [list, setList] = React.useState([])
  const [singleStock, setSingleStock] = React.useState("")


  // Helper Functions
  function addItem() {
    const listItem = {
      id: Math.floor(Math.random() * 100),
      value: stocks
    }

    setSingleStock(stocks)
    
    setList(prev => [...prev, listItem])
    setStocks("")
  }

  //___________
  // Helper Functions
  function handleSubmit() {

  }

  return (
    <>
    <br></br>
      <input 
        type="text"
        placeholder="add stocks"
        value={stocks}
        onChange={e => setStocks(e.target.value)}
      />

      <button onClick={addItem}>add to list</button>

      {list.map(item => <div className="ticker-box" key={item.id}>{item.value}</div>)}
      <br></br>
      ___
      <br></br>
      <button onClick={handleSubmit}>submit</button>

      <StockPrice symbol={singleStock} />
    </>
  )
}

export default App









import React from "react";

function StockPrice (props) {
    const [price, setPrice] = React.useState(null);
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
            setPrice(data.close)
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