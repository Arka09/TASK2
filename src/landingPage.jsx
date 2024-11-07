// src/LandingPage/LandingPage.jsx
import React from 'react';
import {useNavigate} from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/find-book');
    };

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#D8B5FF] to-[#1EAE98] text-white px-4 py-8">
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl text-black md:text-6xl mb-4">
                    Welcome to Book Finder
                </h1>
                <p className="text-black text-lg md:text-2xl pt-6 mb-6">
                    Your journey starts here! Discover amazing books and experiences with me.
                </p>
                <button
                    onClick={handleClick}
                    className="mt-6 px-8 py-3 bg-blue-100 rounded-full text-gray-900 font-semibold rounded-lg hover:bg-purple-300"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
