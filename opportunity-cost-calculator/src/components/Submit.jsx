import React from "react";

function Submit({amountSaved, symbolList, timeHorizon, setChartData} ) {

    async function getPastDate(timelength) {
        for (let i = 0; i < timelength; i++) {
            let today = new Date();// create a new date object for today's date
            today.getUTCDay() == 6 || today.getUTCDay() == 0 ? today.setUTCDate(today.getUTCDate() - 2) && console.log("date changed") : null;

            let timeLengthDate = new Date(today.getFullYear(), today.getMonth() - timelength, today.getDate()); // subtract [timeLength] months from today's date
            timeLengthDate.getUTCDay() == 6 || timeLengthDate.getUTCDay() == 0 ? timeLengthDate.setUTCDate(timeLengthDate.getUTCDate() - 2) && console.log("date changed") : null;

            let iDate = new Date(timeLengthDate.getFullYear(), timeLengthDate.getMonth() + i, timeLengthDate.getDate()); 
            iDate.getUTCDay() == 6 || iDate.getUTCDay() == 0 ? iDate.setUTCDate(iDate.getUTCDate() - 2) && console.log("date changed") : null;

           let iDateString = iDate.toString;



            console.log(iDate.toString);

        }

    }

    async function getLineChartDataPoints() {
        getPastDate(3)

    }

    function submitClick() {
        const amountSavedValue = amountSaved;
        const amountInvestedValue = amountSavedValue / symbolList.length;

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