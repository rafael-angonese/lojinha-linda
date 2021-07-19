import { FC } from 'react';

import UserNav from '../UserNav';

import CloseIcon from '../../assets/icons/Close';

import { useSidebarContext } from '../../hooks/useSidebarContext';
import { useCartContext } from '../../hooks/useCartContext';

import SidebarItem from './SidebarItem';

const Sidebar: FC = () => {
    const { displaySidebar, toggleSideBar } = useSidebarContext();
    const { pokemons } = useCartContext();

    return (
        <>
            <aside
                className={`transform top-0 right-0 w-1/4 p-4 bg-white fixed h-full ease-in-out transition-all duration-300 z-50 ${
                    displaySidebar ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-row justify-between">
                    <div className="flex items-center flex-1">
                        <button
                            onClick={() => toggleSideBar(false)}
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

                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col flex-1 box-border overflow-auto hide-scroll-bar">
                        <h1 className="pt-2 pb-2 text-2xl font-bold tracking-wide cursor-pointer mb-2">
                            Meu carrinho
                        </h1>

                        <ul className="py-4 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-accent-2 border-accent-2">
                            {pokemons &&
                                pokemons.map(pokemon => {
                                    return <SidebarItem pokemon={pokemon} />;
                                })}
                        </ul>
                    </div>

                    <div className="px-6 py-6 sm:px-6 border-t text-sm ">
                        <ul className="pb-2">
                            <li className="flex justify-between py-1">
                                <span>Subtotal</span>
                                <span>R$ 99,99</span>
                            </li>
                            <li className="flex justify-between py-1">
                                <span>Taxas</span>
                                <span>Calculado ao finalizar</span>
                            </li>
                            <li className="flex justify-between py-1">
                                <span>Envio</span>
                                <span className="font-bold tracking-wide">
                                    Grátis
                                </span>
                            </li>
                        </ul>
                        <div className="flex justify-between border-t border-accent-2 py-3 font-bold mb-2">
                            <span>Total</span>
                            <span>R$ 99,99</span>
                        </div>
                        <div>
                            <button className=" px-10 py-5 w-full text-center justify-center uppercase transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                                <span>Finalizar compra</span>
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
