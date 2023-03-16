import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Result from './pages/Result'

function App() {
  const [symbolList, setSymbolList] = React.useState([])

  return (
    <Routes>
      <Route path="/" element={
        <Home 
          symbolList={symbolList}
          setSymbolList={setSymbolList}
        />
      }/>
        <Route path="/result" element={<Result 
          symbolList={symbolList}
          setSymbolList={setSymbolList}
        />
      } />
    </Routes>
  )
}

export default App
