import React from "react";
import { Outlet } from "react-router-dom";

const Posts = () => {
    return (
        <>
            <div style={{ padding: 20 }}>
                <h2>Welcome to Blogposts</h2>
                {/* render any matching child */}
                <Outlet />
            </div>
        </>
    )
}
export default Posts