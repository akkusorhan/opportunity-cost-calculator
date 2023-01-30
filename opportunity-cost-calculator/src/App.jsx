import React from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import axios from "axios"

function App() {
  // Setting State
  const [stocks, setStocks] = React.useState("");
  const [list, setList] = React.useState([])

  // Helper Functions
  function addItem() {
    const listItem = {
      id: Math.floor(Math.random() * 100),
      value: stocks
    }

    setList(prev => [...prev, listItem])
    setStocks("")

    console.log(list)
  }

  return (
    <>

      <input 
        type="text"
        placeholder="add stocks"
        value={stocks}
        onChange={e => setStocks(e.target.value)}
      />

      <button onClick={addItem}>add to list</button>

      <ul>
        {list.map(item => <li key={item.id}>{item.value}</li>)}
      </ul>
    </>
  )
}

export default App
