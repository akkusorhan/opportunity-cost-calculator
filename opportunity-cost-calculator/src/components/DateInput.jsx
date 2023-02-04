import React from "react";

function DateInput({ timeHorizonInput, setTimeHorizonInput, timeHorizon, setTimeHorizon }) {

    return (
        <input 
            type="text"
            placeholder="add date | year-mo-da"
            value={timeHorizonInput}//make sure to change this back to setTimeHorizonInput (if this comment is here then it needs to be changesd)
            onChange={(e) => setTimeHorizonInput(e.target.value)} 
        />
    )


}

export default DateInput;