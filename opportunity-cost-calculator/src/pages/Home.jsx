import React from "react";
import './home.css'

import AmountSaved from "../components/AmountSaved";
import DateInput from "../components/DateInput"
import TickerInput from "../components/TickerInput";

function Home() {
    //Setting state variables for Home Page
    const [amountSaved, setAmountSaved] = React.useState("");
    const [timeHorizon, setTimeHorizon] = React.useState("");

    const [symbolInput, setSymbolInput] = React.useState("")
    const [symbolList, setSymbolList] = React.useState([])

    const [searchData, setSearchData] = React.useState([])

    return (
        <>
            <AmountSaved 
                amountSaved={amountSaved} 
                setAmountSaved={setAmountSaved}
            />
            <DateInput 
                timeHorizon={timeHorizon} 
                setTimeHorizon={setTimeHorizon}
            />
            <TickerInput 
                symbolInput={symbolInput}
                setSymbolInput={setSymbolInput}
                symbolList={symbolList}
                setSymbolList={setSymbolList}
                searchData={searchData}
                setSearchData={setSearchData}
            />

        </>
    )
}

export default Home;