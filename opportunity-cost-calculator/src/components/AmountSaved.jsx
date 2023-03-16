import React from "react";

function AmountSaved({ amountSaved, setAmountSaved}) {
    
    return (
        <>
                <input 
                type="number"
                placeholder="17,250"
                value={amountSaved}
                onChange={(e) => setAmountSaved(prev => prev = e.target.value)}
                className="amountSaved-container" 
                />
            
        </>
    )
}

export default AmountSaved;