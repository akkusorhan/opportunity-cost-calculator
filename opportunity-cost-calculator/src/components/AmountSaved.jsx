import React from "react";

function AmountSaved({ amountSaved, setAmountSaved, amountSavedInput, setAmountSavedInput }) {

    return (
        <>
            <input 
                type="text"
                placeholder="amount saved"
                value={amountSavedInput}
                onChange={(e) => setAmountSavedInput(e.target.value)} 
            />
        </>
        
    )
}

export default AmountSaved;