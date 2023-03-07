import React from "react";

function DateInput({timeHorizon, setTimeHorizon }) {
    return (
        <>
            <select 
            name="dateInput" 
            id="dateInput"
            value={timeHorizon}
            onChange={(e) => setTimeHorizon(prev => prev = e.target.value)}
            className="heroInput"
            >
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
                <option value="9 months">9 months</option>
            </select>
        </>
        
    )


}

export default DateInput;