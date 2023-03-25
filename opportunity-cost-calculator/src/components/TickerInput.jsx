import React from "react";
import { FaSearch, FaPlus, FaTimes } from 'react-icons/fa';

import { SyncLoader } from "react-spinners"

function TickerInput({ symbolInput, setSymbolInput, symbolList, setSymbolList, searchData, setSearchData}) {

    async function handleChange(e) {
        e.preventDefault();
        setSymbolInput(prev => prev = e.target.value)

            let request = await fetch(`https://api.polygon.io/v3/reference/tickers?search=${symbolInput}&active=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`);
            let response = await request.json();
    
            let searchResults = response.results.filter(item => item.market = "us" && item.ticker.length <= 4).slice(0, 15);
    
            for (let i = 0; i < searchResults.length; i++) {
                let companyTicker = searchResults[i].ticker;
                let retrieveLogoRequest = await fetch(`https://api.polygon.io/v3/reference/tickers/${companyTicker}?apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`); 
                let retrieveLogoResponse = await retrieveLogoRequest.json();
    
                let companyLogoUrl;
    
                retrieveLogoResponse.results.branding ? companyLogoUrl = `${retrieveLogoResponse.results.branding.icon_url}?apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL` : null;
                searchResults[i].logo = companyLogoUrl
            }
    
            setSearchData(searchResults);
        

        
    }

    function SearchDropdown() {

        return (
            <div className="dropdown">
                {searchData.length === 0 && symbolInput != "" ? <SyncLoader /> : null}
                {searchData.map((item) => {
                    function addToListClick() {
                        const list = {
                            id: Math.random() * 31.234, 
                            ticker: item.ticker, 
                            name: item.name, 
                            logo: item.logo
                        }

                        setSymbolList(prev => [
                            ...prev, 
                            list
                        ])
                        setSymbolInput("")
                    }
                    return (
                        <>
                            <div key={Math.random() * 31.234} className="dropdown-result" onClick={addToListClick}>
                                <img key={Math.random() * 12.945} src={item.logo} className="dropdown-company-logo"/>
                                <p key={Math.random() * 9.234} className="dropdown-name-text">{item.name}</p>
                                <p key={Math.random() * 6.234} className="dropdown-ticker-text">${item.ticker}</p>
                            </div>
                        </>
                )})}
            </div>
        )
    }

    function handleRemove(index) {
        const newList = [...symbolList]; // create a copy of the array
        newList.splice(index, 1); // remove the item at the specified index
        setSymbolList(newList); // update the state with the new array

    }

    function SelectedStock() {
        return (
            <div key={Math.random()} className="selected-stocks-container">
                    {symbolList.map((item, index) => {
                        return (
                            <div key={item.ticker} className="selected-stocks-item">
                                <p key={Math.random() * 100} className="selected-stocks-item-close-btn" onClick={() => handleRemove(index)}><FaTimes /></p>
                                <img key={Math.random() * 100} src={`${item.logo}`} />
                                <p key={Math.random() * 100}>${item.ticker}</p>
                            </div>
                            
                        )
                    })}
                                    
            </div>
        )

    }

    return (
        <>
            <div className="tickerInput-container">
                <FaSearch className="search-icon"/>
                <input 
                    type="text"
                    placeholder="Search For Your Favorite Stocks"
                    value={symbolInput} 
                    onChange={handleChange}
                    className="tickerInput"
                />
                {symbolInput != "" ? <FaTimes className="search-bar-x-btn" onClick={() => setSymbolInput("")}/> : null}
            </div>
            {symbolInput != "" ? <SearchDropdown/> : null}
            {symbolList.length > 0 ? <SelectedStock /> : 
            <div className="selected-stocks-container-empty">
                <div className="selected-stocks-item-empty">
                    <FaPlus className="plus-btn" />
                </div>
            </div>
            }
        </>
    )

}

export default TickerInput;