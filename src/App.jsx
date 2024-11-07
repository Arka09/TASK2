// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import FindBook from './findBook';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/landing-page" element={<LandingPage />} />
                <Route path="/find-book" element={<FindBook />} />
            </Routes>
        </Router>
    );
}

export default App;
