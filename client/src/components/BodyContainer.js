import React from 'react';
import NavBar from './Navbar.js';
import { Outlet } from 'react-router-dom';

export default function BodyContainer() {
    return (
        <div>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </div>
    );
}
