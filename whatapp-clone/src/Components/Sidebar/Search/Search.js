import React from 'react';
import './Search.css'

import SearchIcon from '@material-ui/icons/Search';

function Search() {
    return (
        <div className='search'>
            <SearchIcon/>
            <input type='text' placeholder='search or start new chat'/>             
        </div>
    )
}

export default Search
