import React from 'react';
import PropTypes from 'prop-types';

const timeFilterTypes = ["1 hour", "6 hours", "12 hours", "1 day", "1 week", "Custom"];

// for some reason, putting the props in { } fixed the onChange is an object instead function
const Search = ({searchSubmit, termChange, filterChange}) => {
    return(
        <div className="container search">
            <form onSubmit={searchSubmit}>
                <input type="text" placeholder="Search by ID" onChange={termChange}/>
                <input type="submit" value="Go"/> 
            </form>
            <br/>
            <div className="row-container">
                {timeFilterTypes.map(timeFilter => {
                    return <button className="button-class" onClick={filterChange} value={timeFilter} key={timeFilter}>{timeFilter}</button>
                })}
            </div>                
        </div>
    );
};

Search.propTypes = {
    searchSubmit: PropTypes.func.isRequired,
    termChange: PropTypes.func.isRequired,
    filterChange: PropTypes.func.isRequired,
};

export default Search;