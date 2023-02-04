import React from "react";

function AmountSaved({ amountSaved, setAmountSaved, amountSavesInput, setAmountSavedInput }) {
    return (
        <input 
            type="text"
            placeholder="amount saved"
            value={amountSavesInput}
            onChange={(e) => setAmountSavedInput(e.target.value)} 
        />
    )
}

export default AmountSaved;