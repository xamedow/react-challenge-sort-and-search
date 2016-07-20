import React, {Component} from 'react';
import UserData from '../components/UserData';
import UserActive from '../components/UserActive';

export default class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: 0
        };
    }

    _isCurrentUser(userId) {
        return this.state.currentUser === userId;
    }

    _setCurrentUser(userId) {
        this.setState({
            currentUser: userId
        })
    }

    _getUsers() {
        return this.props.users.map((user) => {
            return <UserData key={user.id} user={user} isCurrent={this._isCurrentUser(user.id)}
                             setCurrent={this._setCurrentUser.bind(this)}/>;
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-2">
                    <UserActive user={this.props.users[this.state.currentUser]}/>
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
        );
    }
};