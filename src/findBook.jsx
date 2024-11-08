import React, { useState, useEffect } from 'react';
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
    navigate('/');
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544822688-c5f41d2c1972?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D` }}>
      <div className="w-screen h-1/3 flex items-center justify-center text-white bg-black bg-opacity-50 p-4 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold">
          Search Your Desired Book
        </h1>
      </div>

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