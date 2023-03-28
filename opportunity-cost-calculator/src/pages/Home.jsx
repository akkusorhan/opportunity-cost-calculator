import React from "react";
import './home.css'

import video from "../assets/black-gradient-video.mp4"

import AmountSaved from "../components/AmountSaved";
import DateInput from "../components/DateInput"
import TickerInput from "../components/TickerInput";
import Submit from "../components/Submit"

function Home({ symbolList, setSymbolList, amountSaved, setAmountSaved, timeHorizon, setTimeHorizon, primaryLineChartDataPoints, setPrimaryLineChartDataPoints, 
    plResult, 
    setPlResult, 

    plAmount, 
    setPlAmount }) {
    //Setting state variables for Home Page

    const [symbolInput, setSymbolInput] = React.useState("")

    const [searchData, setSearchData] = React.useState([])

    return (
        <div className="home-page">
            <video src={video} autoPlay loop muted className="home-page-bg-vid"></video>
            <div className="navbar">
                    <h1>OpportunityCost.io</h1>
                </div>
            <div className="hero-content">
                <div className="hero-content-components">
                    <div className="hero-content-components-main-text">
                        <h1>Calculate Your Spending <br/> Opportunity Cost.</h1>
                        <h2>See your spending dollars invested, over time, in your favorite stocks.</h2>
                        <hr />
                    </div>
                    <div className="hero-content-components-data-input">
                        <h4 className="hero-content-components-data-input-text">Over the last 
                            <DateInput 
                                timeHorizon={timeHorizon} 
                                setTimeHorizon={setTimeHorizon}
                            />, I've spent $
                            <AmountSaved 
                                amountSaved={amountSaved} 
                                setAmountSaved={setAmountSaved}
                            /> in my personal checking account.</h4>
                        <hr/>

                    </div>
                    <div className="hero-content-search">
                        <h4>Choose the stocks you would like to see your spending dollars invested in.</h4>
                        <TickerInput 
                            symbolInput={symbolInput}
                            setSymbolInput={setSymbolInput}
                            symbolList={symbolList}
                            setSymbolList={setSymbolList}
                            searchData={searchData}
                            setSearchData={setSearchData}
                            timeHorizon={timeHorizon}
                        />
                    </div>
                    <Submit 
                        //_____________
                        symbolInput={symbolInput}
                        setSymbolInput={setSymbolInput}
                        symbolList={symbolList}
                        setSymbolList={setSymbolList}
                        timeHorizon={timeHorizon}
                        setTimeHorizon={setTimeHorizon}
                        amountSaved={amountSaved}
                        setAmountSaved={setAmountSaved}

                        primaryLineChartDataPoints={primaryLineChartDataPoints}
                        setPrimaryLineChartDataPoints={setPrimaryLineChartDataPoints}

                        plResult={plResult}
                        setPlResult={setPlResult}
              
                        plAmount={plAmount}
                        setPlAmount={setPlAmount}
                    />
                </div>

            </div>


        </div>
    )
}

export default Home;