import React from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {
  const [investment, setInvestment] = React.useState({
    timeHorizon: "",
    moneySaved: ""
  })

  function handleChange(event) {
    setInvestment(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <>
      <Navbar />
      <div>
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
      </div>
    </>


  )
}

export default App
