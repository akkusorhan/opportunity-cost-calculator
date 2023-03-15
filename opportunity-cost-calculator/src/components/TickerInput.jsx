import React from "react";
import { FaSearch } from 'react-icons/fa';

function TickerInput({ symbolInput, setSymbolInput, symbolList, setSymbolList, searchData, setSearchData, companyLogo, setCompanyLogo }) {

    async function handleChange(e) {
        e.preventDefault();
        setSymbolInput(prev => prev = e.target.value)

            let request = await fetch(`https://api.polygon.io/v3/reference/tickers?search=${symbolInput}&active=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`);
            let response = await request.json();
    
            let searchResults = response.results.filter(item => item.market = "us" && item.ticker.length <= 4).slice(0, 25);
    
            for (let i = 0; i < searchResults.length; i++) {
                let companyTicker = searchResults[i].ticker;
                let retrieveLogoRequest = await fetch(`https://api.polygon.io/v3/reference/tickers/${companyTicker}?apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`); 
                let retrieveLogoResponse = await retrieveLogoRequest.json();
    
                let companyLogoUrl;
    
                retrieveLogoResponse.results.branding ? companyLogoUrl = `${retrieveLogoResponse.results.branding.logo_url}?apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL` : null;
                searchResults[i].logo = companyLogoUrl
            }
    
            setSearchData(searchResults);
        

        
    }

    function SearchDropdown() {

        return (
            <div className="dropdown">
                {searchData.map((item) => {
                    function addToListClick() {
                        const list = {
                            id: Math.random(), 
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
                            <div key={Math.random()} className="dropdown-result" onClick={addToListClick}>
                                <img key={Math.random()} src={item.logo} className="dropdown-company-logo"/>
                                <p key={Math.random()} className="dropdown-name-text">{item.name}</p>
                                <p key={Math.random()} className="dropdown-ticker-text">${item.ticker}</p>
                            </div>
                        </>
                )})}
            </div>
        )
    }

    function SelectedStock() {
        return (
            <div key={Math.random()} className="selected-stocks-container">
                    {symbolList.map(item => {
                        return (
                            <div key={Math.random()} className="selected-stocks-item">
                                <p key={Math.random()}>x</p>
                                <img key={Math.random()} src={`${item.logo}`} />
                                <p key={Math.random()}>{item.name}</p>
                            </div>
                            
                        )
                    })}
                                    
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
            {symbolList.length > 0 ? <SelectedStock /> : null}
        </>
    )

}

export default TickerInput;