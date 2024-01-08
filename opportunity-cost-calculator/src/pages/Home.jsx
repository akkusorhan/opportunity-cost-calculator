import React from "react";
import './home.css'
import { useNavigate } from "react-router-dom";

import video from "../assets/color-gradient-video.mp4"

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
    
    const navigate = useNavigate()

    return (
        <div className="home-page">
            <video src={video} autoPlay loop muted className="home-page-bg-vid"></video>
            <div className="navbar">
                    <h1 onClick={() => navigate("/mockup")}>OpportunityCost.io</h1>
                </div>
            <div className="hero-content">
                <div className="hero-content-components">
                    <div className="hero-content-components-main-text">
                        <h1>Calculate Your Spending <br/> Opportunity Cost.</h1>
                        <h2>See your dollars invested, over time, in your favorite stocks.</h2>
                        <hr />
                    </div>
                    <div className="hero-content-components-data-input">
                        <h4 className="hero-content-components-data-input-text">If I invested $ 
                            <AmountSaved 
                                amountSaved={amountSaved} 
                                setAmountSaved={setAmountSaved}
                            /> over the last
                            <DateInput 
                                timeHorizon={timeHorizon} 
                                setTimeHorizon={setTimeHorizon}
                            /> in the following stocks, how much would I have?
                            </h4>
                        <hr/>

                    </div>
                    <div className="hero-content-search">
                        <h4>Choose the stocks you would like to see your dollars invested in.</h4>
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

                <div className="dollar-sign">
                    <img src="../src/assets/dollar-sign-vector.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Home;