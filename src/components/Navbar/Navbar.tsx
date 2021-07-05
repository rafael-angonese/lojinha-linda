import { FC } from 'react';
import Image from 'next/image';
import NavbarRoot from './NavbarRoot';
import UserNav from '../UserNav';
import Searchbar from '../SearchBar/SearchBar';

const Navbar: FC = () => (
    <NavbarRoot>
        <div className="relative flex flex-row justify-between py-4 md:py-4 px-2 sm:px-6 lg:px-8">
            <div className="flex items-center flex-1">
                <Image
                    src="/atom.png"
                    alt="Logo"
                    className="block lg:hidden w-auto"
                    width={40}
                    height={40}
                />
            </div>
            <div className="justify-center flex-1 hidden lg:flex">
                <Searchbar />
            </div>
            <div className="flex items-center justify-end flex-1 space-x-8">
                <UserNav />
            </div>
        </div>
        <div className="flex py-4 md:py-4 px-2 sm:px-6 lg:px-8 lg:hidden">
            <Searchbar />
        </div>
    </NavbarRoot>
);

export default Navbar;
