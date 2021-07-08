import React, { FC } from 'react';

import Navbar from '../Navbar';

import { SideBarContextProvider } from '../../contexts/SideBarContext';

const Layout: FC = ({ children }) => {
    return (
        <>
            <SideBarContextProvider>
                <Navbar />
            </SideBarContextProvider>
            <main className="bg-gray-900 min-h-screen">{children}</main>
        </>
    );
};

export default Layout;
