import React, { Component } from 'react';


const SearchBar = ({originalUsers, users, setUsers}) => {
    const _searchUsers = function (e) {
        const value = e.target.value.trim();
        setUsers(originalUsers.filter(user => user.name.includes(value)));
    };

    return (
        <div className="container-fluid">
            <div className="form-group has-feedback">
                <input type="text" className="form-control" placeholder="search users" onChange={_searchUsers.bind(this)}/>
                <span className="form-control-feedback"><span className="badge">{users.length}</span></span>
            </div>
        </div>
    );
};

export default SearchBar;