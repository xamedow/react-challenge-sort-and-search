import React, {Component} from 'react';
import UserList from './containers/UsersList';
import SearchBar from './components/SearchBar'
import Toolbar from './components/Toolbar'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            originalUsers: [],
        };
    }

    _setOriginalUsers(users) {
        this.setState({
            users: users,
            originalUsers: users
        });
    }

    _setUsers(users) {
        this.setState({
            users: users
        });
    }

    componentDidMount() {
        fetch('data.json')
            .then(response => response.json())
            .then(this._setOriginalUsers.bind(this))
            .catch(console.warn);
    }

    render() {
        return (
            <div className="container-fluid app">
                <SearchBar users={this.state.originalUsers} setUsers={this._setUsers.bind(this)} />
                <Toolbar users={this.state.users} setUsers={this._setUsers.bind(this)} />
                <UserList users={this.state.users}/>
            </div>
        );
    }
}
