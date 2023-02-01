import React, { useEffect, useState } from "react";
import PureUserCount from "./PureUserCount";
import UserCount from "./UserCount";
import UsersMemo from "./Users";
import Users from "./Users";

const Main = () => {
    const [flag, setFlag] = useState(true)
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(r => r.json())
            .then(d => {
                setUsers(d.data)
            })
    }, [])
    console.log('main component rendered -count -', users.length);
    return (
        <div className="ui comtainer renders">
            <div>Hello, Good {flag ? 'Morning' : 'Afternoon'}</div>
            <button onClick={() => setFlag(!flag)}>Toggle Message</button>
            <PureUserCount users={users} />
            <div></div>
            <UserCount users={users} />
            {/* <Users users={users} /> */}
            <UsersMemo users={users} />
        </div>
    )
}
export default Main