import React, { use } from 'react';
import { MdStars } from "react-icons/md";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    // const data=use(bookPromise);
    // console.log(singleBook);
    const {bookName, author,bookId, yearOfPublishing, category, tags, image,rating}=singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card py-7 border border-[#13131325] mb-20 bg-base-100 w-96 mx-auto shadow-sm">
        <figure className='py-5 w-2/3 mx-auto bg-[#F3F3F3]'>
            <img className='object-cover rounded-md h-[160px]'
            src={image} />
        </figure>

        <div className="card-body px-16">
        <div className='flex text-blue-500 font-semibold gap-10'>
            {
            tags.map((tag,index)=><button key={index}>{tag}</button>)
        }
        </div>
        <h2 className="font-bold card-title">
        {bookName}
       
        </h2>
        <h3 className='text-[#13131385] text-md'>By: {author} ( Published: {yearOfPublishing})</h3>
        
        <div className="card-actions pt-5 border-t-2 border-gray-300 border-dashed items-center justify-between mt-3">
        <div className="badge font-bold border-gray-300 bg-green-100 text-green-500 badge-outline">{category}</div>
        <div className='flex gap-5'>
            <div className="badge badge-outline">{rating}</div>
            <div ><MdStars className='fill-amber-500' size={22} /></div>
        </div>
        </div>
    </div>
        </div>
        </Link>
    );
};

export default Book;