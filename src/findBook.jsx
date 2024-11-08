// src/FindBook/FindBook.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FindBook = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    
    // Define an array of image URLs for the background slideshow
    const images = [
        'https://unsplash.com/photos/aerial-photography-of-mountain-ridge-qH36EgNjPJY',
        'https://unsplash.com/photos/elegant-reading-room-with-library-and-armchair-for-relaxing-space-for-text-3d-rendering-imdnMdUDomE',
        'https://unsplash.com/photos/a-bookshelf-filled-with-lots-of-books-in-a-library-oiVSKGrb2ig',
        'https://unsplash.com/photos/a-bookshelf-filled-with-lots-of-books-in-a-dark-room-BGiy6QQ9WII'
    ];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Set up an interval to change the background image every 5 seconds
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);

    const handleSearch = (event) => {
        event.preventDefault();
        alert(`Searching for: ${query}`);
        // Implement search functionality here
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="w-full h-screen flex flex-col items-center bg-gradient-to-r from-[#93A5CF] to-[#E4EfE9]">

            {/* Header Section with Sliding Background */}
            <div
                className="w-screen h-1/3 bg-cover bg-center flex items-center justify-center text-white transition-all duration-1000 ease-in-out"
                style={{
                    backgroundImage: `url('${images[currentImageIndex]}')`,
                }}
            >
                <h1 className="text-4xl md:text-5xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
                    Search Your Desired Book
                </h1>
            </div>

            {/* Search Bar Section */}
            <div className="flex flex-col items-center mt-10 w-full px-4">
                <form onSubmit={handleSearch} className="w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Type the book name..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full mt-4 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500"
                    >
                        Search
                    </button>
                    <button
                        type="button"
                        onClick={handleBack}
                        className="w-full mt-4 py-3 rounded-full bg-gray-500 text-white font-semibold"
                    >
                        Back
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FindBook;
