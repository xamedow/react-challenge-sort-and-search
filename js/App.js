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
            term: ''
        };

        this._setOriginalUsers = this._setOriginalUsers.bind(this);
        this.setTerm = this.setTerm.bind(this);
        this.setUsers = this.setUsers.bind(this);
    }

    _setOriginalUsers(users) {
        this.setState({
            users: users,
            originalUsers: users
        });
    }

    _searchUsers(term) {
        if (term) {
            this.setUsers(this.state.originalUsers.filter(user => user.name.includes(term)));
        } else {
            this.setUsers(this.state.originalUsers);
        }
    }

    setUsers(users) {
        this.setState({
            users: users
        });
    }

    setTerm(e) {
        const term = e.target.value.trim();
        this._searchUsers(term);
        this.setState({term});
    }

    componentDidMount() {
        fetch('data.json')
            .then(response => response.json())
            .then(this._setOriginalUsers)
            .catch(console.warn);
    }

    render() {
        return (
            <div className="container-fluid app">
                <SearchBar foundUsers={this.state.users.length} term={this.state.term} setTerm={this.setTerm} />
                <Toolbar users={this.state.users} setUsers={this.setUsers} />
                <UserList users={this.state.users}/>
            </div>
        );
    }
}
