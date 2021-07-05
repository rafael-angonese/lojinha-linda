import React, { FC } from 'react';
import { useRouter } from 'next/router';

import Navbar from '../Navbar';

const Layout: FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="bg-gray-50 min-h-screen">
                asdfas sfsafsfsaf das fsadf
                <br />
                <br />
                <br />
                <br />
                asdfas sfsafsfsaf das fsadf
                {children}
            </main>
        </>
    );
};

export default Layout;
