import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FindBook = () => {
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isEmptyStateActive, setIsEmptyStateActive] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsEmptyStateActive(false);

    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${searchText}`);
      setBookDetails(response.data.docs);
      if (response.data.docs.length === 0) {
        setIsEmptyStateActive(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while fetching data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544822688-c5f41d2c1972?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
      <div className="w-screen flex items-center justify-center text-white bg-black bg-opacity-50 p-4 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold">
          Search Your Desired Book
        </h1>
      </div>

      <div className="flex flex-col items-center mt-10 w-full px-4">
        <form onSubmit={handleSearch} className="w-full max-w-md">
          <input
            type="text"
            placeholder="Type the book name..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setIsEmptyStateActive(false);
            }}
            className="w-full p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 py-3 font-semibold rounded-full"
            style={{ backgroundColor: !isLoading ? 'blue' : 'gray' }}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="w-full mt-4 py-3 rounded-full bg-gray-500 text-white font-semibold"
          >
            Back
          </button>
        </form>

        {isLoading && (
          <div className="flex items-center justify-center mt-4">
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="text-red-500 mt-4">
            {error}
          </div>
        )}

        {bookDetails.length > 0 && (
         <div className="flex items-center justify-center text-white bg-black bg-opacity-50 p-4 rounded-lg mt-6 overflow-x-auto y-scroll">
         <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
           <thead className="bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-header-group">
             <tr>
               <th className="px-6 py-3">Title</th>
               <th className="px-6 py-3">Author Name</th>
               <th className="px-6 py-3">Publisher</th>
             </tr>
           </thead>
           <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-900 whitespace-nowrap">
             {bookDetails.map((ele, index) => (
               <tr key={index} className="hover:bg-gray-50 sm:table-row flex flex-col sm:flex-row">
                 <td className="px-6 py-4 sm:px-6">
                   <span className="sm:hidden font-medium">Title: </span>
                   {ele?.title || 'NA'}
                 </td>
                 <td className="px-6 py-4 sm:px-6">
                   <span className="sm:hidden font-medium">Author Name: </span>
                   {ele?.author_name?.length > 0 ? ele.author_name.join(', ') : 'NA'}
                 </td>
                 <td className="px-6 py-4 sm:px-6">
                   <span className="sm:hidden font-medium">Publisher: </span>
                   {ele?.publisher && ele?.publisher?.length > 0 ? ele.publisher.join(', ') : 'NA'}
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
        )}

        {isEmptyStateActive && (
          <div className="flex items-center justify-center text-white bg-black bg-opacity-50 p-4 rounded-lg mt-6">
            No results to show
          </div>
        )}
      </div>
    </div>
  );
};

export default FindBook;