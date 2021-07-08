import React, { FC } from 'react';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import { SideBarContextProvider } from '../../contexts/SideBarContext';

const Layout: FC = ({ children }) => {
    return (
        <>
            <SideBarContextProvider>
                <Navbar />
                <Sidebar />
            </SideBarContextProvider>
            <main className="bg-gray-900 min-h-screen">{children}</main>
        </>
    );
};

export default Layout;
