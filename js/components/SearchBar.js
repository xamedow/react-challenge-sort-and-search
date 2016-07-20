import React, { Component } from 'react';


const SearchBar = ({users, setUsers}) => {
    let result = [];

    const _searchUsers = function (e) {
        const value = e.target.value.trim();
        result = users.filter(user => user.name.includes(value));
        _setResult();
    };

    const _setResult = function() {
        setUsers(result);
    };

    return (
        <div className="container-fluid">
            <div className="form-group has-feedback">
                <input type="text" className="form-control" placeholder="search users" onChange={_searchUsers.bind(this)}/>
                <span className="badge form-control-feedback">{result.length}</span>
            </div>
        </div>
    );
};

export default SearchBar;