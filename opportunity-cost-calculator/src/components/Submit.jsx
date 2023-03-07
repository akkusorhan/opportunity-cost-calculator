import React from "react";

function Submit({amountSaved, symbolList, timeHorizon, chartData, setChartData, dataPoints, setDataPoints} ) {

    async function getPastDate(timelength) {
        for (let i = 0; i < timelength; i++) {
            let today = new Date();// create a new date object for today's date
            today.getUTCDay() == 6 || today.getUTCDay() == 0 ? today.setUTCDate(today.getUTCDate() - 2) && console.log("date changed") : null;

            let timeLengthDate = new Date(today.getFullYear(), today.getMonth() - timelength, today.getDate()); // subtract [timeLength] months from today's date
            timeLengthDate.getUTCDay() == 6 || timeLengthDate.getUTCDay() == 0 ? timeLengthDate.setUTCDate(timeLengthDate.getUTCDate() - 2) && console.log("date changed") : null;

            let iDate = new Date(timeLengthDate.getFullYear(), timeLengthDate.getMonth() + i, timeLengthDate.getDate()); 
            iDate.getUTCDay() == 6 || iDate.getUTCDay() == 0 ? iDate.setUTCDate(iDate.getUTCDate() - 2) && console.log("date changed") : null;

            let iDateString = iDate.toISOString().substring(0, 10);
            console.log(iDateString);

            let request = await fetch(`https://api.polygon.io/v1/open-close/AAPL/${iDateString}?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`);
            let response = await request.json();

            let dataPointData = {
                "x": `${iDateString}`,
                "y": `${response.close}`,
            }
            setDataPoints(prev => [
                ...prev, 
                { 
                "x": `${iDateString}`,
                "y": `${response.close}`,  
                }
            ])
            


        }
    }

    async function submitClick() {
        getPastDate(3)
        console.log(dataPoints);

    }
    return (
        <button onClick={submitClick}>submit</button>  
    )
}

export default Submit;