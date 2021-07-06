import React, { FC } from 'react';

import Navbar from '../Navbar';

const Layout: FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="bg-gray-900 min-h-screen">{children}</main>
        </>
    );
};

export default Layout;
