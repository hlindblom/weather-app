import './scss/styles.scss';
// import 'bootstrap-icons/font/bootstrap-icons.css';

import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';

const root = createRoot(document.getElementById('app'));
root.render(<App />);
