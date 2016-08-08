import React, {Component} from 'react';
import UserList from './containers/UsersList';
import Toolbar from './containers/Toolbar'
import SearchBar from './components/SearchBar'


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

    _searchUsers(e) {
        const value = e.target.value.trim();
        setUsers(originalUsers.filter(user => user.name.includes(value)));
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
                <SearchBar originalUsers={this.state.originalUsers} users={this.state.users} setUsers={this._setUsers.bind(this)} />
                <Toolbar users={this.state.users} setUsers={this._setUsers.bind(this)} />
                <UserList users={this.state.users}/>
            </div>
        );
    }
}
