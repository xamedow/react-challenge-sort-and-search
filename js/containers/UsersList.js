import React, {Component} from 'react';
import UserData from '../components/UserData';
import UserActive from '../components/UserActive';

export default class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUserId: 0
        };

        this._setCurrentUserId = this._setCurrentUserId.bind(this)
    }

    _isCurrentUser(userId) {
        return this.state.currentUserId === userId;
    }

    _setCurrentUserId(userId) {
        this.setState({
            currentUserId: userId
        })
    }

    _getUsers() {
        if (this.props.users && this.props.users.length) {
            return this.props.users.map(user =>
                <UserData
                    key={user.id}
                    user={user}
                    isCurrent={this._isCurrentUser(user.id)}
                    setCurrent={this._setCurrentUserId}
                />
            );
        }

        return (<tr>
            <td>No users found</td>
        </tr>)
    }

    _getUserById(userId) {
        return this.props.users.filter((user) => user.id === userId)[0];
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.users.length) {
            this._setCurrentUserId(nextProps.users[0].id);
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <UserActive user={this._getUserById(this.state.currentUserId)}/>
                    </div>
                    <div className="col-sm-10">
                        <table className="table users-list">
                            <thead>
                            <tr>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Phone</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this._getUsers()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
};