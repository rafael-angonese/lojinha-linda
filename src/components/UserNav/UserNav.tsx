import React, { FC, useState } from 'react';
import Link from 'next/link';

import Bag from '../../assets/icons/Bag';
import Heart from '../../assets/icons/Heart';

const Layout: FC = () => {
    const [itemsCount, setItemsCount] = useState(5);

    return (
        <ul className="flex flex-row items-center justify-items-end h-full">
            <li className="mr-6 cursor-pointer relative transition ease-in-out duration-100 flex items-center outline-none text-primary">
                <Bag />
                {itemsCount > 0 && (
                    <span className="pl-1 pr-1 border border-accent-1 bg-black text-white absolute round ed-full right-3 top-3 flex items-center justify-center font-bold text-xs">
                        {itemsCount}
                    </span>
                )}
            </li>
            <li className="mr-6 cursor-pointer relative transition ease-in-out duration-100 flex items-center outline-none text-primary">
                <Link href="/wishlist">
                    <Heart />
                </Link>
            </li>
            <button
                type="button"
                className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
            >
                <span className="sr-only">Open user menu</span>
                <img
                    className="h-8 w-8 rounded-full"
                    src="https://github.com/rafael-angonese.png"
                    alt=""
                />
            </button>
        </ul>
    );
};

export default Layout;
