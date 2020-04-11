import React from 'react';

const Searchbox = ({ searchfield, searchChange}) => {
    return (
        <div className="p2">
            <input 
            className="pa3 ba b--green bg-lightest-blue"
            placeholder="search robots... "
            type="search"
            onChange={ searchChange }
            />
        </div>
    )
}

export default Searchbox;