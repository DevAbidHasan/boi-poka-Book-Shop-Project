import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utilities/addToDB';

const BookDetails = () => {
    const {id}=useParams();
    // console.log(id);
    const bookID=parseInt(id);
    const data=useLoaderData();
    // console.log(data);
    const singleBook=data.find(book=>book.bookId===bookID);
    console.log(singleBook);
    const {bookName, author,bookId, yearOfPublishing, category, tags, image,rating}=singleBook;
    const handleMarkAsRead=(id)=>{
        // store with id
        // where to store
        // array or collection based store system
        // if book already exists, then show alert
        // if book not exists, then push in the array/collection
        //
        addToStoredDB(id);
    }
    return (
        <div className=' w-2/3 mx-auto'>
           <img className='w-48' src={image} alt="" />
           <h5>{bookName}</h5>
           {/* <p>{yearOfPublishing}</p> */}
            <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent m-2">Mark as Read</button>
            <button className="btn m-2 btn-info">Add To WishList</button>

        </div>
    );
};

export default BookDetails;