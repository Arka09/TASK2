// src/FindBook/FindBook.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindBook = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        alert(`Searching for: ${query}`);
        // Implement search functionality here
    };

    const handleBack = () => {
        navigate('/landing-page');
    };

    return (
        <div className="w-full h-screen flex flex-col items-center bg-gradient-to-r from-[#93A5CF] to-[#E4EfE9]">

            {/* Header Section */}
            <div
                className="w-screen h-1/3 bg-cover bg-center flex items-center justify-center text-white"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1512820790803-45a93e1faffd')`, // Replace with your image URL
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
                        onClick={handleBack}
                        className="w-full mt-4 py-3 rounded-full bg-gray-500 text-white font-semibold "
                    >
                        Back
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FindBook;
