import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./PostLists";
const Post = () => {
    const { slug } = useParams()
    const post = blogPosts[slug]
    const { title, description } = post
    console.log(post);
    return (
        <>
            <div style={{ padding: 20 }}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>
    )
}
export default Post