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
        <div>
        <h1 className="text-5xl font-bold">Books to freshen up<br/> your bookshelf</h1>
        <p className="py-2">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
        </div>
    </div>
    </div>
    );
};

export default Banner;