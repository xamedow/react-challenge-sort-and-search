import React, { Component } from 'react';


const SearchBar = ({setTerm, term = '', foundUsers = 0}) => {
    return (
        <div className="container-fluid">
            <div className="form-group has-feedback">
                <input type="text" className="form-control" placeholder="search users" value={term} onChange={setTerm}/>
                <span className="form-control-feedback"><span className="badge">{foundUsers}</span></span>
            </div>
        </div>
    );
};

export default SearchBar;