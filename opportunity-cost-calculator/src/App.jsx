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

    console.log(stocks);
    
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
