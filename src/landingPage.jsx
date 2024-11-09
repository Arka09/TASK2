import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/find-book');
  };

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1568392226795-f6aa1c2fc07a?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
    >
      <div className="bg-gray-300 opacity-85 p-8 rounded-lg shadow-md">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl text-black md:text-6xl mb-4">
            Hi John!
          </h1>
          <h2 className="text-4xl text-black md:text-6xl mb-4">
            Welcome to Book Finder
          </h2>
          <p className="text-black text-lg md:text-2xl pt-6 mb-6">
            Your journey starts here! Discover amazing books and experiences.
          </p>
          <button
            onClick={handleClick}
            className="mt-6 px-8 py-3 bg-lime-300 rounded-full text-gray-900 font-semibold rounded-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;