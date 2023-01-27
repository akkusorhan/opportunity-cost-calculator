import React from "react";

function Hero(props) {
    return (
        <section className="hero-content">
            <input 
                type="text" 
                placeholder="time horizon"
                value={props.timeHorizon}
                name={props.name}
            />
            <input 
                type="text" 
                placeholder="money saved"
                value={props.moneySaved}
                name={props.name}
            />

        </section>
    )
}

export default Hero;