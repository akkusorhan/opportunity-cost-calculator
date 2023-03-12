import React from "react";

function AmountSaved({ amountSaved, setAmountSaved}) {

    return (
        <>
            <input 
                type="text"
                placeholder="amount saved"
                value={amountSaved}
                onChange={(e) => setAmountSaved(prev => prev = e.target.value)} 
                className="heroInput"
            />
        </>
        
    )
}

export default AmountSaved;