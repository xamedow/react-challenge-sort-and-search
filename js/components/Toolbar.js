import React from 'react';


const Toolbar = ({users, setUsers}) => {
    return (
        <div className="container-fluid">
            <div className="row col-md-2">
                <a href="" className="btn btn-default"><i className="fa fa-sort-alpha-asc"></i> Sort in alpabet order: down</a>
            </div>
            <div className="row col-md-2">
                <a href="" className="btn btn-default"><i className="fa fa-sort-numeric-asc"></i> Sort by age: down</a>
            </div>
        </div>
    );
};

export default Toolbar;