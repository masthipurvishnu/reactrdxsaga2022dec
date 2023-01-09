import React from "react"
import { Link, Route, useMatches } from 'react-router-dom'
import UserDetails from "./UserDetails";

const Users = () => {
    // const { url, path } = useMatches()
    // console.log('users', useMatches());
    return (
        <>
            <h2>Users</h2>
            <div>
                <h3>Topics</h3>
                {/* <ul>
                    <li>
                        <Link to={`${match?.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${match?.url}/props-v-state`}>
                            Props v/s State
                        </Link>
                    </li>
                </ul> */}

                <Route path=":slug">
                    <UserDetails />
                </Route>
            </div>
        </>
    )
}
export default Users