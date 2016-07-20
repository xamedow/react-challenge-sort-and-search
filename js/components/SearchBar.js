import React, { Component } from 'react';


const SearchBar = ({users, setUsers}) => {

    const _searchUsers = function (e) {
        const value = e.target.value.trim();
        const searchResult = users.filter(user => user.name.includes(value));
        setUsers(searchResult);
    };

    return (
        <div className="container-fluid">
            <input type="text" className="form-control" placeholder="search users" onChange={_searchUsers.bind(this)}/>
        </div>
    );
};

export default SearchBar;