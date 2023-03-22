import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComicPage from './pages/comicPage';

import Home from './pages/home';

export default function RoutesMap() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/:id" element={<ComicPage/>} />
            </Routes>
        </Router>
    )
}

