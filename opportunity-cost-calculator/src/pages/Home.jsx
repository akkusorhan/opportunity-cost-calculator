import React from "react";
import './home.css'

import AmountSaved from "../components/AmountSaved";

function Home() {
    //Setting state variables for Home Page
    const [amountSaved, setAmountSaved] = React.useState("")

    return (
        <>
            <AmountSaved />

        </>
    )
}

export default Home;