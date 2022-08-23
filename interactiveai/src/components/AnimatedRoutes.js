import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from '../views/Homepage';
import Questions from '../views/Questions';
import Result from '../views/Result';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Homepage />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes