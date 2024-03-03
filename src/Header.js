import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() { 
  return (
    <div className='header'>
        <h2>This is header</h2>

        <div class="header__left">
            <img src="" alt=""/>

            <div class="header__search">
                <SearchIcon />
                <input type="text"/>
            </div>

        </div>

        <div class="header__right">

        </div>
    
    
    </div>
  )
}

export default Header