import React from "react";
import { Link } from "react-router-dom";
export const blogPosts = {
    '1': {
        title: "First Blog Post",
        description: "Lorem ipsum dolor..."
    },
    '2': {
        title: "Second Blog Post",
        description: "Hello React Router V6..."
    }
}
const PostLists = () => {

    return (
        <>
            <h3>Posts:</h3>
            <ul>
                {Object.entries(blogPosts).map(([slug, { title }]) => (
                    <li key={slug}>
                        <Link to={`/posts/${slug}`}>
                            <h3>{title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default PostLists