import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allBooks, setAllBooks]=useState([]);

    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setAllBooks(data);
    //     })
    // },[])

    // const bookPromise=fetch("booksData.json").then(res=>res.json())
    // console.log(bookPromise);

    return (
        <div >
            <h1 className='text-center font-bold text-4xl my-15'>Books</h1>
            <Suspense fallback={<span>Loadiiing...</span>}>
                <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                    data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;