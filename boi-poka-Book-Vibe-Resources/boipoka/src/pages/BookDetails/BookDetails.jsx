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
    const {bookName, author,bookId,publisher, yearOfPublishing, category, tags,review,totalPages, image,rating}=singleBook;
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
        <div className='flex items-center gap-10 my-10 mx-auto'>
           <div className=''>
                    <img className=' bg-gray-200 h-120 p-12 w-520' src={image} alt="" />
           </div>
            <div>
                    <div className='border-b border-gray-400 border-dashed'>
                        <h5 className='text-2xl pb-2'>{bookName}</h5>
                        <h2 className='pb-1 text-[#13131380]'>By : {author}</h2>
                    </div>
                    <div className='border-b py-1 border-gray-400 border-dashed text-[#13131380]'>
                        {category}
                    </div>
                    <div className='mt-2'>
                        <span className='font-bold '>Review : </span><span className='text-[#13131370]'>{review}</span>
                    </div>
                    <div className='flex py-3 border-b gap-8'>
                        <div>
                        <h2 className='font-bold'>Tag</h2>
                        </div>
                    
                    <div >
                        {
                        tags.map((tag,index)=><button className='mr-4 font-semibold text-green-500 bg-green-50 px-4 rounded-xl' key={index}>#{tag}</button>)
                        }
                    </div>
                    </div>
           {/* <p>{yearOfPublishing}</p> */}
           <div className='my-2'>
                <h2 ><span className='text-[#13131380]'>Number of Pages :</span>       {totalPages}</h2>
                <h2><span className='text-[#13131380]'>Publisher :</span> {publisher}</h2>
                <h2><span className='text-[#13131380]'>Year of Publishing :</span> {yearOfPublishing}</h2>
                <h2><span className='text-[#13131380]'>Rating : </span> {rating}</h2>
           </div>
                    <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent mr-2">Mark as Read</button>
                    <button className="btn m-2 btn-info">Add To WishList</button>
            </div>

        </div>
    );
};

export default BookDetails;