import ProductCard from '../components/ProductCard';

import axios from '../services/axios';
import { POKEAPI_URL } from '../constants/uri';

type pokemonProps = {
    id: number;
    name: string;
    url: string;
    image_url: string;
};

type fetchPokemon = {
    count: number;
    next: string;
    previous: any;
    results: pokemonProps[];
};

interface Props {
    pokemons: pokemonProps[];
}

export default function Home({ pokemons }: Props) {

    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {pokemons &&
                            pokemons.map(pokemon => {
                                return <ProductCard key={pokemon.id} pokemon={pokemon} />;
                            })}
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps() {
    const response = await axios.get<fetchPokemon>(`${POKEAPI_URL}/pokemon`);

    const pokemons = response.data.results.map(pokemonItem => {
        var array = pokemonItem.url.split('/');
        const pokeId = array[array.length - 2];

        return {
            ...pokemonItem,
            id: pokeId,
            image_url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`
        };
    });

    return {
        props: {
            pokemons
        }
    };
}
