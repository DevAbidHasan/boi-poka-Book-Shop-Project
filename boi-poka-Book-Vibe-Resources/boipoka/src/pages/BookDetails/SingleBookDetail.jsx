import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { VscBook } from "react-icons/vsc";
const SingleBookDetail = ({b}) => {
    const {bookName, author,bookId, yearOfPublishing, category,publisher,totalPages, tags,review, image,rating}=b;
    return (
        <div className='border border-1 border-[#13131325] rounded-2xl mb-3 p-0'>
            <div className='flex p-4 items-center'>
                <div className='p-5 bg-[#13131310] rounded-xl'>
                <img className='w-[140px] rounded-sm object-cover h-[180px]' src={image} alt="" />
                </div>
                <div className='ml-20 pb-2 space-y-2'>
                <h2 className='font-semibold'>{bookName}</h2>
                <h2 className='text-[#13131380]'>By : {author}</h2>
                <div className='flex gap-10'>
                    <div>
                        <h2 className='font-bold'>Tag</h2>
                    </div>
                    
                    <div >
                        {
                        tags.map((tag,index)=><button className='mr-4 font-semibold text-green-500 bg-green-50 px-4 rounded-xl' key={index}>#{tag}</button>)
                    }
                    </div>
                    <div className='flex gap-2'>
                       <div> <CiLocationOn size={25} /></div>
                       <div>
                        <h2 className='text-[#13131380]'>Year of Publishing: {yearOfPublishing}</h2>
                       </div>
                        
                    </div>
                   
                    
                </div>
                <div className='flex items-center gap-8'>
                        <div><GoPeople /></div>
                        <div>
                            <h2>Publisher : {publisher}</h2>
                        </div>
                        <div className='flex justify-center gap-2 items-center'>
                            <div><VscBook /></div>
                            <div>Page : {totalPages}</div>
                        </div>
                    </div>
                     <div className="divider lg:divider-vertical divider-end"></div>
                     <div className='flex gap-12'>
                        <div>
                            <h2 className='text-[#328EFF] bg-[#328EFF15]  px-3 rounded-3xl'>Category: {category}</h2>
                        </div>
                        <div>
                            <h2 className='text-[#FFAC33] bg-[#FFAC3315]  px-3 rounded-3xl'>Rating: {rating}</h2>
                        </div>
                        <div>
                            <h2 className='bg-[#23BE0A] text-white px-3 rounded-3xl'>View Details</h2>
                        </div>
                     </div>
                
                
                </div>
            </div>
        </div>
    );
};

export default SingleBookDetail;