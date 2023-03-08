import React from "react";

function Submit({amountSaved, symbolList, timeHorizon, chartData, setChartData, dataPoints, setDataPoints, numberOfShares, setNumberOfShares} ) {

    async function getPastDate(timelength) {
        const dataPoints = [];

        for (let i = 0; i < timelength; i++) {
            let today = new Date();// create a new date object for today's date
            today.getUTCDay() == 6 || today.getUTCDay() == 0 ? today.setUTCDate(today.getUTCDate() - 2) : null;

            let timeLengthDate = new Date(today.getFullYear(), today.getMonth() - timelength, today.getDate()); // subtract [timeLength] months from today's date
            timeLengthDate.getUTCDay() == 6 || timeLengthDate.getUTCDay() == 0 ? timeLengthDate.setUTCDate(timeLengthDate.getUTCDate() - 2) : null;

            let iDate = new Date(timeLengthDate.getFullYear(), timeLengthDate.getMonth() + i, timeLengthDate.getDate()); 
            iDate.getUTCDay() == 6 || iDate.getUTCDay() == 0 ? iDate.setUTCDate(iDate.getUTCDate() - 2) : null;

            let iDateString = iDate.toISOString().substring(0, 10); //returns YYYY-MM-DD

            let request = await fetch(`https://api.polygon.io/v1/open-close/AAPL/${iDateString}?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`);
            let response = await request.json();

            let dataPointData = {
                "x": `${iDateString}`,
                "y": `${response.close}`,
            }

            dataPoints.push(dataPointData);
            


        }

        await setChartData([{
            "id": "chartData",
            "color": "hsl(5, 70%, 50%)",
            "data": dataPoints
        }])
        

    }































    /*async function getPastDate(timelength) {
        const dataPoints = [];

        for (let i = 0; i < timelength; i++) {
            let today = new Date();// create a new date object for today's date
            today.getUTCDay() == 6 || today.getUTCDay() == 0 ? today.setUTCDate(today.getUTCDate() - 2) : null;

            let timeLengthDate = new Date(today.getFullYear(), today.getMonth() - timelength, today.getDate()); // subtract [timeLength] months from today's date
            timeLengthDate.getUTCDay() == 6 || timeLengthDate.getUTCDay() == 0 ? timeLengthDate.setUTCDate(timeLengthDate.getUTCDate() - 2) : null;

            let iDate = new Date(timeLengthDate.getFullYear(), timeLengthDate.getMonth() + i, timeLengthDate.getDate()); 
            iDate.getUTCDay() == 6 || iDate.getUTCDay() == 0 ? iDate.setUTCDate(iDate.getUTCDate() - 2) : null;

            let iDateString = iDate.toISOString().substring(0, 10); //returns YYYY-MM-DD

            let request = await fetch(`https://api.polygon.io/v1/open-close/AAPL/${iDateString}?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`);
            let response = await request.json();

            let dataPointData = {
                "x": `${iDateString}`,
                "y": `${response.close}`,
            }

            dataPoints.push(dataPointData);
            


        }

        await setChartData([{
            "id": "chartData",
            "color": "hsl(5, 70%, 50%)",
            "data": dataPoints
        }])
        

    }*/

    async function submitClick() {
        await getPastDate(16)

    }
    return (
        <button onClick={submitClick}>submit</button>  
    )
}

export default Submit;