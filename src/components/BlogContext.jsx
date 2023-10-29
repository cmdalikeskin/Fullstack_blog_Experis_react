import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';

const BlogContext = createContext();

export const MyProvider = ({ children }) => {
    const [dataContext, setDataContext] = useState([])

    const getAllBlogs = () => {
        axios.get("http://localhost:4000/blogs")
            .then((response) => {
                setDataContext(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        getAllBlogs();
    }, [])


    return (
        <BlogContext.Provider value={dataContext}>
            {children}
        </BlogContext.Provider>
    );
};
export const blogContextData = () => {
    return useContext(BlogContext);
};