import React from 'react';


const UserData = ({user, isCurrent, setCurrent}) => {
    return (
        <tr className={ isCurrent ? 'active' : null } onClick={setCurrent.bind(this, user.id)}>
            <td className="img"><img src={'/images/' + user.image + '.svg'} alt={user.name} /></td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.phone}</td>
        </tr>
    );
};
export default UserData;