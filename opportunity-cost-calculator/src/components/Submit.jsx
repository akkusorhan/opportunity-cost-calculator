import React from "react";

import { Link } from 'react-router-dom'

function Submit({ 
    symbolInput, 
    setSymbolInput, 
    symbolList,
    setSymbolList, 
    timeHorizon, 
    setTimeHorizon, 
    amountSaved, 
    setAmountSaved, 
    
    primaryLineChartDataPoints, 
    setPrimaryLineChartDataPoints,

    plResult, 
    setPlResult, 

    plAmount, 
    setPlAmount
}){

    function getRandomColor() {
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 100);
        const lightness = Math.floor(Math.random() * 100);
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      }
      
      async function getPastDate(timelength, ticker, savedAmount) {
        let dataPoints = [];
        let amountOfShares;
        let investedAmount = savedAmount / (symbolList.length)

        let plSoFar;

        for (let i = 0; i < timelength; i++) {
            let today = new Date();// create a new date object for today's date
            today.getUTCDay() == 6 || today.getUTCDay() == 0 ? today.setUTCDate(today.getUTCDate() - 2) : null;

            let timeLengthDate = new Date(today.getFullYear(), today.getMonth() - timelength, today.getDate()); // subtract [timeLength] months from today's date
            timeLengthDate.getUTCDay() == 6 || timeLengthDate.getUTCDay() == 0 ? timeLengthDate.setUTCDate(timeLengthDate.getUTCDate() - 2) : null;

            let iDate = new Date(timeLengthDate.getFullYear(), timeLengthDate.getMonth() + i, timeLengthDate.getDate()); 
            iDate.getUTCDay() == 6 || iDate.getUTCDay() == 0 ? iDate.setUTCDate(iDate.getUTCDate() - 2) : null;

            let iDateString = iDate.toISOString().substring(0, 10); //returns YYYY-MM-DD


            let request = await fetch(`https://api.polygon.io/v1/open-close/${ticker}/${iDateString}?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`);
            let response = await request.json();


            let chartDateString = iDate.toISOString().slice(2, 7); // returns YY-MM



            if (i == 0) {
                amountOfShares = investedAmount / response.close;
                let dataPointData = {
                    "x": `${chartDateString}`,
                    "y": `${response.close * amountOfShares}`
                }
                dataPoints.push(dataPointData);
            } else if (i == timelength - 1) {
                let dataPointData = {
                    "x": `${chartDateString}`,
                    "y": `${response.close * amountOfShares}`
                }
                dataPoints.push(dataPointData);

                plSoFar = response.close * amountOfShares;

            } else {
                let dataPointData = {
                    "x": `${chartDateString}`,
                    "y": `${response.close * amountOfShares}`
                }
                dataPoints.push(dataPointData);
            }

        }

        await setPlResult(prev => prev + plSoFar)

        await setPrimaryLineChartDataPoints(prev => [...prev, {
            "id": ticker,
            "color": getRandomColor(),
            "data": dataPoints
        },]
        )
    }  

    async function compileResults() {
        for (let i = 0; i < symbolList.length; i++) {
            await getPastDate(timeHorizon, symbolList[i].ticker, amountSaved);
        }
    }

    function submitClick() {
        compileResults();

    }

    return (

        <Link to="/result"><button className="submit-button" type="button" onClick={submitClick}>Calculate My Opportunity Cost</button></Link>
        
    )
}

export default Submit;