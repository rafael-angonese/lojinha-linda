import React, { FC } from 'react';
import Link from 'next/link';

import Bag from '../../assets/icons/Bag';
import Heart from '../../assets/icons/Heart';

import { useSidebarContext } from '../../hooks/useSidebarContext';
import { useCartContext } from '../../hooks/useCartContext';

const Layout: FC = () => {
    const { displaySidebar, toggleSideBar } = useSidebarContext();
    const { pokemons } = useCartContext();

    return (
        <ul className="flex flex-row items-center justify-items-end h-full">
            <li
                onClick={() => toggleSideBar(!displaySidebar)}
                className="mr-6 cursor-pointer relative transition ease-in-out duration-100 flex items-center outline-none text-primary"
            >
                <Bag />
                {pokemons.length > 0 && (
                    <span className="pl-1 pr-1 border border-accent-1 bg-black text-white absolute round ed-full right-3 top-3 flex items-center justify-center font-bold text-xs">
                        {pokemons.length}
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
