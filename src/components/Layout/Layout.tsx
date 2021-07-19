import React, { FC } from 'react';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Layout: FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <main className="bg-gray-900 min-h-screen">{children}</main>
        </>
    );
};

export default Layout;
