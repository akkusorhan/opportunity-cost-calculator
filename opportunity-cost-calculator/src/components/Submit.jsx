import React from "react";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate()

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

            let chartDateStringYear = iDate.toISOString().slice(2, 4); // returns YY
            let chartDateStringMonth = iDate.toISOString().slice(5, 7); // returns MM


            let chartDateString = `${chartDateStringMonth}/${chartDateStringYear}`



            if (i == 0 && typeof response.close === "number") {
                //typeof amountOfShares === "number" ? amountOfShares = investedAmount / response.close : amountOfShares = 0;
                amountOfShares = investedAmount / response.close
                let dataPointData = {
                    "x": `${chartDateString}`,
                    "y": `${response.close * amountOfShares}`
                }
                dataPoints.push(dataPointData);
            } else if (i == timelength - 1 && typeof response.close === "number") {
                let dataPointData = {
                    "x": `${chartDateString}`,
                    "y": `${response.close * amountOfShares}`
                }
                dataPoints.push(dataPointData);

                plSoFar = response.close * amountOfShares;

            } else if (typeof response.close != "number") {
                let modifiedDate = new Date(iDate.getFullYear(), iDate.getMonth(), iDate.getDate() - 1); 
                modifiedDate.setUTCDate(modifiedDate.getUTCDate());

                let modifiedDateString = modifiedDate.toISOString().substring(0, 10); //returns YYYY-MM-DD

                let modifiedRequest = await fetch(`https://api.polygon.io/v1/open-close/${ticker}/${modifiedDateString}?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`);
                let modifiedResponse = await modifiedRequest.json();

                let modifiedChartDateStringYear = iDate.toISOString().slice(2, 4); // returns YY
                let modifiedChartDateStringMonth = iDate.toISOString().slice(5, 7); // returns MM

                let modifiedChartDateString = `${modifiedChartDateStringMonth}/${modifiedChartDateStringYear}`;



                let dataPointData = {
                    "x": `${modifiedChartDateString}`,
                    "y": 0,
                    //"y": `${modifiedResponse.close * amountOfShares}`
                }
                dataPoints.push(dataPointData);
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
        symbolList.length > 0 && amountSaved > 0 && timeHorizon > 3 ? navigate("/result") : alert("Please complete all fields.");
    }

    return (

        <button className="submit-button" type="button" onClick={submitClick}>Calculate My Opportunity Cost</button>
        
    )
}

export default Submit;