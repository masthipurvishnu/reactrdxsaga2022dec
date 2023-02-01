import React, { useState, useEffect } from "react";

const UsersList = () => {
    const [users, setUsers] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [filteredUsers, setfilteredUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            setUsers(data)
            setfilteredUsers(data)
        }
        fetchData()
    }, [])
    const handleSearchChange = (e) => {
        console.log(e.target.value);
        // const fUsers = users.filter(user => user.name === e.target.value)
        const fUsers = users.filter((user) => {
            return user.name.indexOf(e.target.value) >= 0
        })
        setfilteredUsers(fUsers)
        setSearchValue(e.target.value)
    }
    return (
        <>
            <h4>Regular - Users List</h4>
            <input value={searchValue} onChange={handleSearchChange} />
            {filteredUsers?.length > 0 ?
                filteredUsers.map((user, i) => {
                    return (
                        <div key={i}>{user.name}</div>
                    )
                })

                :
                <>{'No users list available'}</>
            }
        </>
    )
}
export default UsersList