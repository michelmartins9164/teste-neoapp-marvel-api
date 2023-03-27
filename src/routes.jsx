import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './pages/cart'
import Home from './pages/home';
import OverviewComic from './pages/overviewComic';

export default function RoutesMap() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Home/>} />

                <Route path="/" element={<Home/>} />
                <Route path="/:id" element={<OverviewComic/>} />
                <Route path="/car" element={<Cart/>} />
            </Routes>
        </Router>
    )
}

