import './scss/styles.scss';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import App from './App.js';

const root = createRoot(document.getElementById('app'));
root.render(
    <Router>
        <App />
    </Router>
);
