import React from 'react';

const SortButton = ({sorter, onClick, disabled}) => {
    if (sorter) {
        const {active, direction, icon, name} = sorter;

        return (
            <a
                onClick={onClick}
                href="#"
                className={`btn btn-default ${active}`}
                data-name={name}
                disabled={disabled}
            >
                <i className={`fa fa-sort-${icon}-${direction}`}></i>
                <span>Sort by {name}</span>
            </a>
        )
    }

    return null;
};

export default SortButton;