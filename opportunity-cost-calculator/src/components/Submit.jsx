import React from "react";

function Submit({amountSaved, symbolList, timeHorizon, chartData, setChartData, dataPoints, setDataPoints, numberOfShares, setNumberOfShares} ) {
        async function getPastDate(timelength, ticker, savedAmount) {
        let dataPoints = [];
        let amountOfShares;

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


            if (i == 0) {
                amountOfShares = savedAmount / response.close;
                console.log(amountOfShares + response.close)
                let dataPointData = {
                    "x": `${iDateString}`,
                    "y": `${response.close * amountOfShares}`,
                }
                dataPoints.push(dataPointData);
            } else {
                let dataPointData = {
                    "x": `${iDateString}`,
                    "y": `${response.close * amountOfShares}`,
                }
                dataPoints.push(dataPointData);
            }

        }

        await setChartData(prev => [...prev, {
            "id": ticker,
            "color": "hsl(5, 70%, 50%)",
            "data": dataPoints
        },]
        )
    }  

    async function compileResults() {
        for (let i = 0; i < symbolList.length; i++) {
            await getPastDate(9, symbolList[i].ticker, amountSaved);
        }
    }

    async function submitClick() {
        await compileResults();

    }
    return (
        <button onClick={submitClick}>submit</button>  
    )
}

export default Submit;