import React from 'react';
import './SearchBox.css';

export const SearchBox = (props) => {
    return(
        <div className='search'>
            <input 
            type='search'
            placeholder={props.placeholder}
            onChange={ props.handleChange }
             />
        </div>
    );
}
