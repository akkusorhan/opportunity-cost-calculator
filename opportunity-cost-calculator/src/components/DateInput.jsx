import React from "react";

function DateInput({ timeHorizonInput, setTimeHorizonInput, timeHorizon, setTimeHorizon }) {
    return (
        <>
            <input 
                type="text"
                placeholder="add date | year-mo-da"
                value={timeHorizonInput}
                onChange={(e) => setTimeHorizonInput(e.target.value)} 
            />
        </>
        
    )


}

export default DateInput;