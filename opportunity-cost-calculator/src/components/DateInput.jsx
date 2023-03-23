import React from "react";

function DateInput({timeHorizon, setTimeHorizon}) {
    return (
        <>
                <select 
                    name="dateInput" 
                    id="dateInput"
                    value={timeHorizon}
                    onChange={(e) => setTimeHorizon(prev => prev = e.target.value)}
                    className="dateInput"
                    >
                        <option value="3">3 months</option>
                        <option value="6">6 months</option>
                        <option value="9">9 months</option>
                        <option value="12">12 months</option>
                        <option value="18">18 months</option>
                        <option value="24">24 months</option>
                        <option value="36">36 months</option>
                        <option value="48">48 months</option>

                </select>
            
        </>
    )
}

export default DateInput;