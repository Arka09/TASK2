import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Component to search for books and display results
const FindBook = () => {
  // State variables for search input, loading state, book details, and empty state
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState([]);
  const [isEmptyStateActive, setIsEmptyStateActive] = useState(false);

  // Navigation hook for routing
  const navigate = useNavigate();

  // Handles search form submission
  const handleSearch = (event) => {
    // Clear previous results and empty state
    setBookDetails([]);
    setIsEmptyStateActive(false);

    event.preventDefault(); // Prevent default form submission behavior
    setIsLoading(true); // Indicate search in progress

    axios
      .get(`https://openlibrary.org/search.json?title=${searchText}`)
      .then((res) => {
        // Update book details and handle empty results
        setBookDetails(res?.data?.docs || []); // Set retrieved books (or empty array)
        res?.data?.docs?.length === 0 && setIsEmptyStateActive(true);
        setIsLoading(false); // Search completed
      })
      .catch(() => {
        // Handle potential errors during search
        setIsLoading(false);
        setIsEmptyStateActive(true); // Show empty state for errors as well
      });
  };

  // Handles back button click
  const handleBack = () => {
    navigate("/"); // Navigate back to home route
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1544822688-c5f41d2c1972?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="w-screen flex items-center justify-center text-white bg-black bg-opacity-50 p-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Search Your Desired Book
        </h1>
      </div>

      <div className="flex flex-col items-center mt-10 w-full px-4">
        <form onSubmit={handleSearch} className="w-full max-w-md">
          <input
            type="text"
            placeholder="Title, Author Name or Publisher..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setIsEmptyStateActive(false); // Reset empty state on input change
            }}
            className="w-full p-3 bg-gray-200 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 text-[18px] py-3 font-semibold rounded-full"
            style={{
              backgroundColor: !isLoading ? "blue" : "gray",
              opacity: !isLoading ? "90" : "100",
            }}
          >
            {isLoading ? "Searching..." : "Search"}
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="w-full mt-4 py-3 rounded-full bg-gray-300 text-black text-[18px] opacity-90 font-semibold"
          >
            Back
          </button>
        </form>

        {/* Conditionally render book results based on presence of data */}
        {bookDetails.length > 0 && (
          <div className="w-full max-w-4xl mt-6 max-h-96 overflow-y-auto bg-white rounded-lg shadow-md">
            <div className="flex flex-col">
              <div className="flex text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-100 p-4">
                <div className="w-1/3 px-2">Title</div>
                <div className="w-1/3 px-2">Author Name</div>
                <div className="w-1/3 px-2">Publisher</div>
              </div>
              <div className="divide-y divide-gray-200">
                {bookDetails.map((ele, index) => (
                  <div
                    key={index}
                    className="flex hover:bg-gray-50 text-sm text-gray-900 p-4"
                  >
                    <div className="w-1/3 px-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                      {ele?.title || "NA"}
                    </div>
                    <div className="w-1/3 px-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                      {ele?.author_name?.length > 0
                        ? ele.author_name.join(", ")
                        : "NA"}
                    </div>
                    <div className="w-1/3 px-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                      {ele?.publisher && ele?.publisher?.length > 0
                        ? ele.publisher.join(", ")
                        : "NA"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Display empty state if no results or error */}
        {isEmptyStateActive && (
          <div className="flex items-center justify-center text-white bg-red-700 font-semibold text-l p-4 rounded-lg mt-6">
            NO RESULTS
          </div>
        )}
      </div>
    </div>
  );
};

export default FindBook;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Component to search for books and display results
const FindBook = () => {
  // State variables for search input, loading state, book details, and empty state
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState([]);
  const [isEmptyStateActive, setIsEmptyStateActive] = useState(false);

  // Navigation hook for routing
  const navigate = useNavigate();

  // Handles search form submission
  const handleSearch = (event) => {
    // Clear previous results and empty state
    setBookDetails([]);
    setIsEmptyStateActive(false);

    event.preventDefault(); // Prevent default form submission behavior
    setIsLoading(true); // Indicate search in progress

    axios.get(`https://openlibrary.org/search.json?title=${searchText}`)
      .then(res => {
        // Update book details and handle empty results
        setBookDetails(res?.data?.docs || []); // Set retrieved books (or empty array)
        res?.data?.docs?.length === 0 && setIsEmptyStateActive(true);
        setIsLoading(false); // Search completed
      })
      .catch(() => {
        // Handle potential errors during search
        setIsLoading(false);
        setIsEmptyStateActive(true); // Show empty state for errors as well
      });
  };

  // Handles back button click
  const handleBack = () => {
    navigate('/'); // Navigate back to home route
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544822688-c5f41d2c1972?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
      <div className="w-screen flex items-center justify-center text-white bg-black bg-opacity-50 p-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Search Your Desired Book
        </h1>
      </div>

      <div className="flex flex-col items-center mt-10 w-full px-4">
        <form onSubmit={handleSearch} className="w-full max-w-md">
          <input
            type="text"
            placeholder="Title, Author Name or Publisher..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setIsEmptyStateActive(false); // Reset empty state on input change
            }}
            className="w-full p-3 bg-gray-200 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 text-[18px] py-3 font-semibold rounded-full"
            style={{ backgroundColor: !isLoading ? 'blue' : 'gray', opacity: !isLoading ? '90' : '100' }}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="w-full mt-4 py-3 rounded-full bg-gray-300 text-black text-[18px] opacity-90 font-semibold"
          >
            Back
          </button>
        </form>

        {/* Conditionally render book results based on presence of data */}
        {bookDetails.length > 0 && (
          <div className="w-full max-w-4xl mt-6 max-h-96 overflow-y-auto bg-white rounded-lg shadow-md">
            <div className="flex flex-col">
              <div className="flex text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-100 p-4">
                <div className="w-1/3 px-2">Title</div>
                <div className="w-1/3 px-2">Author Name</div>
                <div className="w-1/3 px-2">Publisher</div>
              </div>
              <div className="divide-y divide-gray-200">
                {bookDetails.map((ele, index) => (
                  <div key={index} className="flex hover:bg-gray-50 text-sm text-gray-900 p-4">
                    <div className="w-1/3 px-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                      {ele?.title || 'NA'}
                    </div>
                    <div className="w-1/3 px-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                      {ele?.author_name?.length > 0 ? ele.author_name.join(', ') : 'NA'}
                    </div>
                    <div className="w-1/3 px-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                      {ele?.publisher && ele?.publisher?.length > 0 ? ele.publisher.join(', ') : 'NA'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Display empty state if no results or error */}
        {isEmptyStateActive && (
          <div className="flex items-center justify-center text-white bg-red-700 font-semibold text-l p-4 rounded-lg mt-6">
            NO RESULTS
          </div>
        )}
      </div>
    </div>
  );
};

export default FindBook;