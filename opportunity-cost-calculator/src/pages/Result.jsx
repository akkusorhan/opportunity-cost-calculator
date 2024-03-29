import React from "react";
import './result.css'

import ResultLineChart from "../components/ResultLineChart";

import SingleStockPerformance from "../components/SingleStockPerformance";

import PieChart from "../components/PieChart";

function Result({ symbolList, setSymbolList, amountSaved, setAmountSaved, timeHorizon, setTimeHorizon, primaryLineChartDataPoints, setPrimaryLineChartDataPoints, 
    plResult, 
    setPlResult, 

    plAmount, 
    setPlAmount }) {


    let plAmountt = plResult - amountSaved;

    let plColor;
    plResult - amountSaved > amountSaved - plResult ? plColor = "#00ff00" : plColor = "#ff0000"


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
            <div className="result-text">
                <h1>Results</h1>
            </div>
            <div className="primary-result-container">
                <div className="primary-result-line-chart">
                    <ResultLineChart 
                        amountSaved={amountSaved}
                        setAmountSaved={setAmountSaved}
                        timeHorizon={timeHorizon}
                        setTimeHorizon={setTimeHorizon}
                        symbolList={symbolList}
                        setSymbolList={setSymbolList}

                        primaryLineChartDataPoints={primaryLineChartDataPoints}
                        setPrimaryLineChartDataPoints={setPrimaryLineChartDataPoints}
                    />
                </div>
                
                <div className="result-main-text-container">
                    <h4>Your spending is worth</h4>
                    <p className="result-amount-text">${plResult.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                    <p className="result-pl" style={{color: plColor}}>Total Return: ${plAmountt.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                    <p className="result-selected-stocks-text">${amountSaved} Invested Over {timeHorizon} Months In The Following {symbolList.length} Stocks: </p>
                    <ResultSelectedStock />
                </div>
            </div>
            <div className="result-secondary-container">
                <div className="result-investment-performance-container">
                    <h4>Investment Performance</h4>

                    <SingleStockPerformance symbolList={symbolList} primaryLineChartDataPoints={primaryLineChartDataPoints} amountSaved={amountSaved} />

                    

                </div>
                <div className="result-pie-chart-container">
                    <h4>Investment Breakdown</h4>
                    <PieChart symbolList={symbolList} primaryLineChartDataPoints={primaryLineChartDataPoints} />

                </div>

            </div>
        </div>
        </>
    )
}

export default Result;