import React from "react";

import { Link } from 'react-router-dom'

function Submit({ 
    symbolInput, 
    setSymbolInput, 
    symbolList,
    setSymbolList, 
    timeHorizon, 
    setTimeHorizon, 
    amountSaved, 
    setAmountSaved
}) {
    return(

        <Link to="/result"><button className="submit-button" type="button">Calculate My Opportunity Cost</button></Link>
        
    )
}

export default Submit;