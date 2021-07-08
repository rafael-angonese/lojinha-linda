import { FC } from 'react';
import Image from 'next/image';
import NavbarRoot from './NavbarRoot';
import UserNav from '../UserNav';
import Searchbar from '../SearchBar/SearchBar';
import Cross from '../../assets/icons/Close';
import { useSidebarContext } from '../../hooks/useSidebarContext';
const Navbar: FC = () => {
    const { displaySidebar, toggleSideBar } = useSidebarContext();

    return (
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

            <aside
                className={`transform top-0 right-0 w-1/4 p-4 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
                    displaySidebar ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-row justify-between">
                    <div className="flex items-center flex-1">
                        <button
                            onClick={toggleSideBar}
                            aria-label="Close"
                            className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none"
                        >
                            <Cross className="h-6 w-6 hover:text-accent-3" />
                            <span className="ml-2 text-accent-7 text-sm ">
                                Fechar
                            </span>
                        </button>
                    </div>
                    <div className="flex items-center justify-end flex-1 space-x-8">
                        <UserNav />
                    </div>
                </div>

                <p className="mt-4 text-gray-800">
                    asdfasfasfsadf aaaaaaaaaaaaaa
                </p>
                <p className="text-gray-800">asdfasfasfsadf aaaaaaaaaaaaaa</p>
                <p className="text-gray-800">asdfasfasfsadf aaaaaaaaaaaaaa</p>
            </aside>
        </NavbarRoot>
    );
};

export default Navbar;
