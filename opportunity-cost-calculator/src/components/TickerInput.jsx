import React from "react";
import { useEffect } from "react";
import { FaSearch } from 'react-icons/fa';

function TickerInput({ symbolInput, setSymbolInput, symbolList, setSymbolList, searchData, setSearchData, companyLogo, setCompanyLogo }) {

    async function handleChange(e) {
        await setSymbolInput(prev => prev = e.target.value)

        const request = await fetch(`https://api.polygon.io/v3/reference/tickers?search=${symbolInput}&active=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`);
        const response = await request.json();

        const searchResults = await response.results.filter(item => item.market = "us");

        await setSearchData(searchResults);

        console.log(searchData)
    }
    
    function SearchDropdown() {

        return (
            <div className="dropdown">
                {searchData.map((item) => {
                    return (
                        <div key={Math.random()}className="dropdown-result">
                            <img src={companyLogo} />
                            <p key={Math.random()} className="dropdown-name-text">{item.name.split(" ").slice(0, 3).join(" ")}</p>
                            <p key={Math.random()} className="dropdown-ticker-text">${item.ticker}</p>
                        </div>
                )})}
            </div>
        )
    }

    return (
        <>
            <div className="tickerInput-container">
                <input 
                    type="text"
                    placeholder="add ticker to list"
                    value={symbolInput} 
                    onChange={handleChange}
                    className="tickerInput"
                />
                <FaSearch />
            </div>
            {symbolInput != "" && searchData.length != 0 ? <SearchDropdown/> : null}
        </>
    )

}

export default TickerInput;