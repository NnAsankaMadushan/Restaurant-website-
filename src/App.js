// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
;
export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}
