import React from "react";
import './result.css'

import ResultLineChart from "../components/ResultLineChart";

function Result({ symbolList, setSymbolList, amountSaved, setAmountSaved, timeHorizon, setTimeHorizon }) {

    function ResultSelectedStock() {
        return (
            <div key={Math.random()} className="result-selected-stocks-container">
                    {symbolList.map((item, index) => {
                        return (
                            <div key={item.ticker} className="result-selected-stocks-item">
                                <img key={Math.random() * 100} src={`${item.logo}`} />
                                <p key={Math.random() * 100}>${item.ticker}</p>
                            </div>
                            
                        )
                    })}
                                    
            </div>
        )

    }

    return (
        <>
        <div className="navbar">
            <h1>OpportunityCost.io</h1>
        </div>
        <div className="result-page">
            <div className="primary-result-container">
                <div className="primary-result-line-chart">
                    <ResultLineChart />
                </div>
                
                <div className="result-main-text-container">
                    <h4>Your spending is worth</h4>
                    <p className="result-amount-text">$3,465.81</p>
                    <p className="result-pl">Total Return: +$703.92</p>
                    <p className="result-selected-stocks-text">$2,761.89 Invested Over 18 Months In The Following Stocks: </p>
                    <ResultSelectedStock 
                        amountSaved={amountSaved}
                        setAmountSaved={setAmountSaved}
                        timeHorizon={timeHorizon}
                        setTimeHorizon={setTimeHorizon}
                        symbolList={symbolList}
                        setSymbolList={setSymbolList}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Result;