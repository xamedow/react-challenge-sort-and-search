import React, {Component} from 'react';
import SortButton from '../components/SortButton';


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
        };

        this.handleSortButton = this.handleSortButton.bind(this);
        this._resetSorters = this._resetSorters.bind(this);
    }

    _sortUsersBy(field, direction, compare) {
        this.props.setUsers(this.props.users.sort((a, b) => {
            return compare(a[field], b[field]) * direction;
        }));
    }

    handleSortButton(e) {
        const target = e.currentTarget;
        const stateKey = this.state.sorters.reduce((out, sorter, idx) => {
            if (sorter.name === target.dataset.name) {
                return out + idx;
            }
            return out;
        }, 0);
        let newStateSorters = this.state.sorters.map(sorter => {
            sorter.active = '';
            return sorter;
        });

        this._sortUsersBy(newStateSorters[stateKey].name, newStateSorters[stateKey].direction === 'desc' ? 1 : -1, newStateSorters[stateKey].compare);

        newStateSorters[stateKey].active = ' active';
        newStateSorters[stateKey].direction = newStateSorters[stateKey].direction === 'desc' ? 'asc' : 'desc';

        e.preventDefault();
    }

    _unactiveSorters() {
        const sorters = this.state.sorters.map(sorter => {
            sorter.active = '';
            return sorter;
        });
        this.setState({
            sorters: sorters
    })
    }

    _resetSorters() {
        this._unactiveSorters();
        this._sortUsersBy('id', 1, (x, y) => x - y);
    }

    render() {
        const usersCount = this.props.users.length;

        return (
            <div className="container-fluid toolbar">
                {
                    this.state.sorters.map((sorter) => {
                        return (
                            <SortButton
                                key={sorter.name}
                                sorter={sorter}
                                onClick={this.handleSortButton}
                                disabled={!usersCount}
                            />)
                    })
                }
                <a
                    onClick={this._resetSorters}
                    href="#"
                    className="btn btn-danger"
                    disabled={!usersCount}
                >
                    <i className="fa fa-ban"></i>
                    <span>Reset</span>
                </a>
            </div>
        );
    }
};