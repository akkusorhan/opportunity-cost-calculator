import React from "react";
import './result.css'

import ResultLineChart from "../components/ResultLineChart";

function Result({ symbolList, setSymbolList }) {

    function SelectedStock() {
        return (
            <div key={Math.random()} className="selected-stocks-container">
                    {symbolList.map((item, index) => {
                        return (
                            <div key={item.ticker} className="selected-stocks-item">
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
                
                <div className="result-main-text">
                    <h4>Your spending is worth</h4>

                </div>
            </div>
        </div>
        </>
    )
}

export default Result;