import React from 'react';

const SortButton = ({sorter, handler, usersCount}) => {
    return (
        <div className="row col-md-2">
            <a onClick={handler} href="#" className={"btn btn-default " + sorter.active} data-name={sorter.name} disabled={!usersCount}>
                <i className={`fa fa-sort-${sorter.icon}-${sorter.direction}`}></i>
                <span>Sort by {sorter.name}</span>
            </a>
        </div>
    )
};

export default SortButton;