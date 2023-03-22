import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Result from './pages/Result'

function App() {
  const [amountSaved, setAmountSaved] = React.useState("");
  const [timeHorizon, setTimeHorizon] = React.useState("");

  const [symbolList, setSymbolList] = React.useState([])

  const [submissionData, setSubmissionData] = React.useState({
    amountSaved: amountSaved, 
    timeHorizon: timeHorizon,
    symbolList: symbolList, 
    amountInvested: amountSaved / symbolList.length,
    
  })

  return (
    <Routes>
      <Route path="/" element={
        <Home 
          amountSaved={amountSaved}
          setAmountSaved={setAmountSaved}
          timeHorizon={timeHorizon}
          setTimeHorizon={setTimeHorizon}
          symbolList={symbolList}
          setSymbolList={setSymbolList}
        />
      }/>
        <Route path="/result" element={
        <Result 
          amountSaved={amountSaved}
          setAmountSaved={setAmountSaved}
          timeHorizon={timeHorizon}
          setTimeHorizon={setTimeHorizon}
          symbolList={symbolList}
          setSymbolList={setSymbolList}
        />
      } />
    </Routes>
  )
}

export default App
