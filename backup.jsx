import React from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import axios from "axios"

function App() {
  const apiKey = "MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL"

  const [investment, setInvestment] = React.useState({
    timeHorizon: "",
    moneySaved: "", 
    stock: ""
  })

  const  [stockData, setStockData] = React.useState([])


  function submitToApi() {
    fetch(`https://api.polygon.io/v1/open-close/AAPL/2022-06-14?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`)
      .then(response => response.json())
      .then(data => {
        setStockData(prev => prev = data)
      })
      .catch(error => console.log(error));
  }
  

  function handleChange(event) {
    setInvestment(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  console.log(`TH: ${investment.timeHorizon} | MS: ${investment.moneySaved} | S: ${investment.stock}`)

  function handleSubmit(event) {
    event.preventDefault();
    console.log(investment)
    submitToApi()
  }

  console.log("Close Price " + stockData.close)

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="time horizon"
          name="timeHorizon"
          value={investment.timeHorizon}
          onChange={handleChange}
        />

        <input
          placeholder="money saved"
          name="moneySaved"
          value={investment.moneySaved}
          onChange={handleChange}
        />
        <input
          placeholder="stock"
          name="stock"
          value={investment.stock}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      {stockData ? (<p>The Stock {stockData.symbol} closed at ${stockData.close}</p>) : (<p>Nothing Found</p>)}
    </>
  
    
  )
}

export default App
