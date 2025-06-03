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

    const data=useLoaderData();
    console.log(data);

    useEffect(()=>{
        const storedBookData=getStoredBook();
        const convertedStoredBooks=storedBookData.map(id=>parseInt(id));
        // console.log(convertedStoredBooks);
        const myReadList=data.filter(book=>convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);
    },[])


    return (
        <div>
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