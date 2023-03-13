import React from "react";

function AmountSaved({ amountSaved, setAmountSaved}) {
    
    return (
        <>

            <div className="amountSaved-container">
                <p>$</p>
                <input 
                type="text"
                placeholder="17,250"
                value={amountSaved}
                onChange={(e) => setAmountSaved(prev => prev = e.target.value)}
                className="amountSavedInput" 
                />
            </div>
            
        </>
    )
}

export default AmountSaved;