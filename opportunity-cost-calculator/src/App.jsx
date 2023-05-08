import React from 'react'
import { Route, Routes } from 'react-router-dom'

import mockup from "./assets/mockup.png"

import Home from './pages/Home'
import Result from './pages/Result'

function Mockup() {
  return (
    <img src={mockup} />
  )
}

function App() {
  const [amountSaved, setAmountSaved] = React.useState("");
  const [timeHorizon, setTimeHorizon] = React.useState("");
  const [symbolList, setSymbolList] = React.useState([]);

  const [plResult, setPlResult] = React.useState(0)
  const [plAmount, setPlAmount] = React.useState(plResult - amountSaved)

  const [primaryLineChartDataPoints, setPrimaryLineChartDataPoints] = React.useState([]) //line chart data for result page

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

          primaryLineChartDataPoints={primaryLineChartDataPoints}
          setPrimaryLineChartDataPoints={setPrimaryLineChartDataPoints}

          plResult={plResult}
          setPlResult={setPlResult}

          plAmount={plAmount}
          setPlAmount={setPlAmount}
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

          primaryLineChartDataPoints={primaryLineChartDataPoints}
          setPrimaryLineChartDataPoints={setPrimaryLineChartDataPoints}

          plResult={plResult}
          setPlResult={setPlResult}

          plAmount={plAmount}
          setPlAmount={setPlAmount}
        />
      } />
      <Route path="/mockup" element={<Mockup />}/>
    </Routes>
  )
}

export default App
