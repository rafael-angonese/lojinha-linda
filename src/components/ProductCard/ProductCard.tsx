import { FC } from 'react';
import Link from 'next/link';

type pokemonProps = {
    id: number;
    name: string;
    image_url: string;
};

type Props = {
    pokemon: pokemonProps;
};

import { useCartContext } from '../../hooks/useCartContext';
import { useSidebarContext } from '../../hooks/useSidebarContext';

const ProductCard: FC<Props> = ({ pokemon }) => {
    const { addPokemon } = useCartContext();
    const { toggleSideBar } = useSidebarContext();

    const addPokemonIntoCart = (pokemon: pokemonProps) => {
        addPokemon(pokemon);
        toggleSideBar(true);
    };

    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full transform transition duration-500 hover:scale-110">
            <a className="block relative h-62 rounded overflow-hidden">
                <div className="absolute flex flex-col top-0 right-0 p-3">
                    <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </button>
                </div>
                <Link href={`/product/${pokemon.id}`}>
                    <img
                        src={pokemon.image_url}
                        alt="Produto"
                        className="bg-white cursor-pointer object-contain object-center w-full h-80 block rounded-2xl"
                    />
                </Link>
            </a>
            <div className="flex-auto justify-evenly">
                <div className="flex flex-wrap ">
                    <div className="w-full flex-none text-sm flex items-center text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-red-500 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-400 whitespace-nowrap mr-3">
                            4.9
                        </span>
                        <span className="mr-2 text-gray-400">Brasil</span>
                    </div>
                    <div className="flex items-center w-full justify-between min-w-0 ">
                        <Link href={`/product/${pokemon.id}`}>
                            <h2 className="text-lg capitalize mr-auto cursor-pointer text-gray-200 hover:text-purple-500">
                                {pokemon.name}
                            </h2>
                        </Link>
                    </div>
                </div>
                <div className="text-xl text-white font-semibold mt-1">
                    R$ 99,99
                </div>
                <div className="mt-2 flex space-x-2 text-sm font-medium justify-start">
                    <button
                        onClick={() => addPokemonIntoCart(pokemon)}
                        className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 "
                    >
                        <span>Adicionar ao carrinho</span>
                    </button>

                    <Link href={`/product/${pokemon.id}`}>
                        <button className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className=""
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
