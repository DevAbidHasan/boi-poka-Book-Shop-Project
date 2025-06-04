import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utilities/addToDB';
import Book from '../Book/Book';
import SingleBookDetail from '../BookDetails/singleBookDetail';

const ReadList = () => {
    // worst case e eivabe kore
    // normally eivabe korena

    const [readList, setReadList]=useState([]);
    const [sort,setSort]=useState("");

    const data=useLoaderData();
    console.log(data);

    useEffect(()=>{
        const storedBookData=getStoredBook();
        const convertedStoredBooks=storedBookData.map(id=>parseInt(id));
        // console.log(convertedStoredBooks);
        const myReadList=data.filter(book=>convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);
    },[])

    const handleSort=(type)=>{
        setSort(type);
        if(type==='Pages'){
            const sortedByPage=[...readList].sort((a,b)=>a.totalPages-b.totalPages);
            setReadList(sortedByPage);
        }
        if(type==='Ratings'){
            const sortedByRating=[...readList].sort((a,b)=>a.rating-b.rating);
            setReadList(sortedByRating);
        }
    }

    return (
        <div>
                <details className="dropdown">
                <summary className="btn m-1">Sort By : {sort?sort:""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=>handleSort("Pages")}>Pages</a></li>
                    <li><a onClick={()=>handleSort("Ratings")}>Ratings</a></li>
                </ul>
                </details>
        <Tabs className='my-14'>
        <TabList>
        <Tab>Read Books ({readList.length})</Tab>
        <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
        <div className='my-14'>
            {
            readList.map(b=><SingleBookDetail key={b.bookId} b={b}></SingleBookDetail>)
        }
        </div>
        </TabPanel>
        <TabPanel>
        <h2>My wishlist books are here</h2>
        </TabPanel>
    </Tabs>
            </div>
        );
};

export default ReadList;