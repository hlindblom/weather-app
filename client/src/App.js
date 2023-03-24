import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BodyContainer from './components/BodyContainer.js';
import Today from './views/Today.js';
import Hourly from './views/Hourly.js';
import Weekly from './views/Weekly.js';
import NotFound from './views/NotFound.js';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<BodyContainer />}>
                <Route index element={<Today />} />
                <Route path="/hourly" element={<Hourly />} />
                <Route path="/weekly" element={<Weekly />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
