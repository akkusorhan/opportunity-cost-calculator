import React from "react";

function DateInput({ timeHorizonInput, setTimeHorizonInput, timeHorizon, setTimeHorizon }) {
    console.log(timeHorizon)
    return (
        <>
            <select 
            name="dateInput" 
            id="dateInput"
            value={timeHorizon}
            onChange={(e) => setTimeHorizonInput(e.target.value)}
            className="heroInput"
            >
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
            </select>
        </>
        
    )


}

export default DateInput;