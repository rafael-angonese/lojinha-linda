import { FC } from 'react';
import UserNav from '../UserNav';
import CloseIcon from '../../assets/icons/Close';
import { useSidebarContext } from '../../hooks/useSidebarContext';
const Sidebar: FC = () => {
    const { displaySidebar, toggleSideBar } = useSidebarContext();

    return (
        <>
            <aside
                className={`transform top-0 right-0 w-1/4 p-4 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50 ${
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
                            <CloseIcon className="h-6 w-6 hover:text-accent-3" />
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
        </>
    );
};

export default Sidebar;
