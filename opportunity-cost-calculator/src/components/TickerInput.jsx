// import React from "react";
import React, { useState, useCallback } from 'react';
import { FaSearch, FaPlus, FaTimes } from 'react-icons/fa';

import { SyncLoader } from "react-spinners"

function TickerInput({ symbolInput, setSymbolInput, symbolList, setSymbolList, searchData, setSearchData, timeHorizon}) {

    function useDebouncedCallback(callback, delay) {
        const [timer, setTimer] = useState(null);
      
        const debouncedCallback = useCallback((...args) => {
          if (timer) {
            clearTimeout(timer);
          }
          const newTimer = setTimeout(() => {
            callback(...args);
          }, delay);
          setTimer(newTimer);
        }, [callback, delay]);
      
        return debouncedCallback;
      }


    const fetchData = async (value) => {
        // console.log(value)
        let request = await fetch(`https://api.polygon.io/v3/reference/tickers?search=${value}&active=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`);
        let response = await request.json();
        // console.log(response)
    
        let searchResults = response.results.filter(item => item.market === "stocks" && item.ticker.length <= 4) //.slice(0, 15);
        // let searchResults = response.results;

        // async function sortResponse(responseData) {
        //     let result = responseData.results.filter(item => item.market === "us" && item.ticker.length <= 4).slice(0, 15)
        //     searchResults = result
        //     console.log("what")
        // }
        // sortResponse(response)

        
    
        for (let i = 0; i < searchResults.length; i++) {
          let companyTicker = searchResults[i].ticker;
          let retrieveLogoRequest = await fetch(`https://api.polygon.io/v3/reference/tickers/${companyTicker}?apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`); 
          let retrieveLogoResponse = await retrieveLogoRequest.json();
        //   console.log(retrieveLogoResponse)
    
          let companyLogoUrl;
          retrieveLogoResponse.results.branding ? companyLogoUrl = `${retrieveLogoResponse.results.branding.icon_url}?apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL` : null;
          searchResults[i].logo = companyLogoUrl;
        }
    
        setSearchData(searchResults);
      }

      const debouncedFetchData = useDebouncedCallback(fetchData, 500);


    async function handleChange(e) {
        e.preventDefault();
        const currentValue = e.target.value;
          setSymbolInput(currentValue)
          debouncedFetchData(currentValue)

        

        
    }

    function SearchDropdown() {

        return (
            <div className="dropdown">
                {searchData.length === 0 && symbolInput != "" ? <SyncLoader /> : null}
                {searchData.map((item) => {
                    async function addToListClick() {
                        let today = new Date();
                        let timeLengthDate = new Date(today.getFullYear(), today.getMonth() - timeHorizon, today.getDate()); // subtract [timeHorizon] months from today's date
                        timeLengthDate.getUTCDay() == 6 || timeLengthDate.getUTCDay() == 0 ? timeLengthDate.setUTCDate(timeLengthDate.getUTCDate() - 5) : null;
                        let timeLengthDateString = timeLengthDate.toISOString().substring(0, 10); //returns YYYY-MM-DD

                        let request = await fetch(`https://api.polygon.io/v1/open-close/${item.ticker}/${timeLengthDateString}?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`);
                        let response = await request.json();

                        if (typeof response.close != "number") {
                            let modifiedDate = new Date(timeLengthDate.getFullYear(), timeLengthDate.getMonth(), timeLengthDate.getDate() + 1); 
                            modifiedDate.setUTCDate(modifiedDate.getUTCDate());
            
                            let modifiedDateString = modifiedDate.toISOString().substring(0, 10); //returns YYYY-MM-DD
            
                            let modifiedRequest = await fetch(`https://api.polygon.io/v1/open-close/${item.ticker}/${modifiedDateString}?adjusted=true&apiKey=MXrXoKsreyzlXOqFZZlKE3yGdbTlsieL`);
                            let modifiedResponse = await modifiedRequest.json();

                            if (typeof modifiedResponse.close != "number") {
                                alert(`Stock ${item.name} cannot be found for the specified time horizon.`)
                            } else {
                                const list = {
                                    id: Math.random() * 31.234, 
                                    ticker: item.ticker, 
                                    name: item.name, 
                                    logo: item.logo
                                }
        
                                await setSymbolList(prev => [
                                    ...prev, 
                                    list
                                ])
                                await setSymbolInput("")

                            }
                        } else {
                            const list = {
                                id: Math.random() * 31.234, 
                                ticker: item.ticker, 
                                name: item.name, 
                                logo: item.logo
                            }
    
                            await setSymbolList(prev => [
                                ...prev, 
                                list
                            ])
                            await setSymbolInput("")
                        }


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