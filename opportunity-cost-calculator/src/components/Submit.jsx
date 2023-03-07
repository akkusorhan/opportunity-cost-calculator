import React from "react";

function Submit({amountSaved, symbolList, timeHorizon, setChartData} ) {

    function getPastDate(timelength) {
        const today = new Date();// create a new date object for today's date
        const timeLengthDate = new Date(today.getFullYear(), today.getMonth() - timelength, today.getDate()); // subtract [timeLength] months from today's date

        if (timeLengthDate.getUTCDay === 6 || timeLengthDate.getUTCDay === 0) {
            timeLengthDate.setUTCDate(timeLengthDate.getUTCDate() - 2);
        }

        const dateAsString = timeLengthDate.toISOString().substring(0, 10); // extract the date as a string in yyyy-mm-dd format

        return dateAsString;
    }

    async function getLineChartDataPoints() {
        let pastDate = getPastDate(3); //make sure to change 3 to a dynamic value from dateInput/timeHorizon
        const dataPoints = []

        for (let i = 0; i < 3; i++) {/*
            let request = await fetch(`https://api.polygon.io/v1/open-close/AAPL/${pastDate}?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`);
            let response = await request.json()

            dataPoints.push({
                "x": `${pastDate}`, 
                "y": response.close
            })
*/
            const newPastDate = new Date(pastDate)
            const newtimeLengthDate = new Date(newPastDate.getFullYear(), newPastDate.getMonth() + 1, newPastDate.getDate());
            if (newtimeLengthDate.getUTCDay === 6 || newtimeLengthDate.getUTCDay === 0) { //this if statement is not currently effective, fix it
                newtimeLengthDate.setUTCDate(newtimeLengthDate.getUTCDate() - 2);
            }
            pastDate = newtimeLengthDate.toISOString().substring(0, 10);
            console.log(pastDate)
            
        }

        return dataPoints;
    }

    function submitClick() {
        const amountSavedValue = amountSaved;
        const amountInvestedValue = amountSavedValue / symbolList.length;

        console.log(amountSavedValue, amountInvestedValue, timeHorizon);
        getLineChartDataPoints();


        const lineChartPoints = getLineChartDataPoints()
        const data = {
            "id": "norway",
            "color": "hsl(5, 70%, 50%)",
            "data": [lineChartPoints]
        }

        setChartData(data)

    }
    return (
        <button onClick={submitClick}>submit</button>  
    )
}

export default Submit;