import React from 'react';


const UserActive = ({user}) => {
    if (user) {
        return (
            <div className="list-group">
                <div className="list-group-item row">
                    <img className="img-thumbnail" src={'/images/' + user.image + '.svg'} alt={user.name}/>
                </div>
                <div className="list-group-item row">
                    <div className="col-md-4"><strong>Name</strong></div>
                    <div className="col-md-8">{user.name}</div>
                </div>
                <div className="list-group-item row">
                    <div className="col-md-4"><strong>Age</strong></div>
                    <div className="col-md-8">{user.age}</div>
                </div>
                <div className="list-group-item row">
                    <div className="col-md-4"><strong>Phone</strong></div>
                    <div className="col-md-8">{user.phone}</div>
                </div>
                <div className="list-group-item row">
                    <div className="col-md-4"><strong>Motto</strong></div>
                    <div className="col-md-8">{user.phrase}</div>
                </div>
            </div>
        );
    }

    return (<div>User not found.</div>);
};

export default UserActive;