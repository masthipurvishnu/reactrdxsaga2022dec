import React from "react";

const Users = ({ users }) => {
    console.log('User Component - ', users?.length);
    return (
        <>
            <h3>Users Component</h3>
            <div style={{ display: 'flex' }}>
                {users && users.map((user, i) => {
                    return (
                        <>
                            <div key={user.id}>

                                <p key={user.first_name}>
                                    <strong key={i}>{user.first_name}</strong>
                                </p>
                                <p key={user.email}>{user.email}</p>
                                <img key={`a${user.first_name}`} src={user.avatar} />
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}
const UsersMemo = React.memo(Users)
export default UsersMemo