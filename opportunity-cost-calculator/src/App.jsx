import React from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import axios from "axios"

function App() {
  //_______
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

    console.log(list.map(item => item.value))
  }
  //___________
  // Setting State
  const [timeHorizon, setTimeHorizon] = React.useState("")

  // Helper Functions
  function handleTimeChange(event) {
    setTimeHorizon(prev => prev = event.target.name = event.target.value)

    console.log(`time horizon changed to ${timeHorizon}`)
  }


  return (
    <>
    ___
    <br></br>
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
      <br></br>
      ___
      <br></br>
      <select 
        name="timeHorizon" 
        id="timeHorizon"
        value={timeHorizon}
        onChange={handleTimeChange}
      >
        <option value="">-- choose --</option>
        <option value="18 months">18 months</option>
        <option value="24 months">24 months</option>
        <option value="36 months">36 months</option>
        <option value="48 months">48 months</option>

      </select>
    </>
  )
}

export default App
