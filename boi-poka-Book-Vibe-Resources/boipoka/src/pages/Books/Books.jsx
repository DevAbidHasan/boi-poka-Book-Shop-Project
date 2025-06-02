import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allBooks, setAllBooks]=useState([]);

    useEffect(()=>{
        fetch("booksData.json")
        .then(res=>res.json())
        .then(data=>{
            setAllBooks(data);
        })
    },[])
    return (
        <div>
            <h1>This is Books</h1>
            <h1>Total Books: {allBooks.length}</h1>
        </div>
    );
};

export default Books;