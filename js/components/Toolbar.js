import React, {Component} from 'react';
import SortButton from './SortButton';


export default class Toolbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sorters: [
                {
                    name     : 'name',
                    icon     : 'alpha',
                    direction: 'desc',
                    active   : '',
                    compare(x, y) {
                        return (x < y ? -1 : x > y ? 1 : 0);
                    }
                },
                {
                    name     : 'age',
                    icon     : 'numeric',
                    direction: 'desc',
                    active   : '',
                    compare(x, y) {
                        return (x < y ? -1 : x > y ? 1 : 0);
                    }
                }
            ]
        }
    }

    _sortUsersBy(field, direction, compare) {
        this.props.setUsers(this.props.users.sort((a, b) => {
            return compare(a[field], b[field]) * direction;
        }));
    }

    _handleSortButton(e) {
        const target = e.currentTarget;
        const stateKey = this.state.sorters.reduce((out, sorter, idx) => {
           if(sorter.name === target.dataset.name) {
               return out + idx;
           }
           return out;
        }, 0);
        let newStateSorters = this.state.sorters.map(sorter => {
            sorter.active = false;
            return sorter;
        });

        this._sortUsersBy(newStateSorters[stateKey].name, newStateSorters[stateKey].direction === 'desc' ? 1 : -1, newStateSorters[stateKey].compare);

        newStateSorters[stateKey].active = ' active';
        newStateSorters[stateKey].direction = newStateSorters[stateKey].direction === 'desc' ? 'asc' : 'desc';

        e.preventDefault();
    }

    render() {
        return (
            <div className="container-fluid">
                {
                    this.state.sorters.map((sorter) => {
                      return (<SortButton key={sorter.name} sorter={sorter} handler={this._handleSortButton.bind(this)} />)
                    })
                }
                <div className="row col-md-2">
                    <a href="#" className="btn btn-danger">
                        <i className="fa fa-ban"></i>
                        <span>Reset</span>
                    </a>
                </div>
            </div>
        );
    }
};