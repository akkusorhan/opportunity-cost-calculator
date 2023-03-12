import React from "react";
import styled from "styled-components"

const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 34em;
    height: 3.8em;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;

`; // this is the container that houses the whole searchbar component, everything gets appended to this

const SearchInputContainer = styled.div`
    width: 100%;
    min-height: 4em;
    display: flex;
    align-items: center;
    position: relative;
    padding: 2px 15px;
`; //this is the component that will house the actual search input, the reason the search input needs to be nested in a container is becuase we will add search icon, spinners, and more

const SearchInput = styled.div`
    
`;

function searchBar() {

}

export default searchBar;