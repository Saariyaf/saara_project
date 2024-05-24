import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5181/api/Blogs')
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the blogs!", error);
            });
    }, []);

    return (
        <div>
            <h1>Blogs</h1>
            <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
