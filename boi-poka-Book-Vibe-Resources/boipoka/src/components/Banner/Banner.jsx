import React from 'react';
import bookimage from '../../../../../boi-poka-Book-Vibe-Resources/books.jpg'

const Banner = () => {
    return (
        <div className="hero px-14 my-7 bg-base-200 min-h-screen">
        <div className="hero-content py-20 flex-col lg:flex-row-reverse">
        <img
        src={bookimage}
        className="max-w-sm rounded-lg shadow-2xl"
        />
        <div >
        <h1 className="text-5xl mb-15 mr-8 font-bold">Books to freshen up<br/> your bookshelf</h1>
        <button className="btn btn-primary">Get Started</button>
        </div>
    </div>
    </div>
    );
};

export default Banner;