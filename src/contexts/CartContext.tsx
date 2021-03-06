import { createContext, ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type pokemonProps = {
    id: number;
    name: string;
    image_url: string;
};

type CartContextType = {
    pokemons: pokemonProps[];
    addPokemon: (pokemon: pokemonProps) => void;
};

type CartContextProviderProps = {
    children: ReactNode;
};

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider(props: CartContextProviderProps) {
    const [pokemons, setPokemons] = useState<pokemonProps[]>([]);

    useEffect(() => {
        async function getStoragedPokemons() {
            try {
                const storagedPokemons = await JSON.parse(
                    localStorage.getItem('pokemons') || '[]'
                );

                setPokemons(storagedPokemons);
            } catch (e) {
                console.log(e);
            }
        }
        getStoragedPokemons();
    }, []);

    const addPokemon = async (pokemon: pokemonProps) => {
        const data = pokemons;
        data.push(pokemon);

        localStorage.setItem('pokemons', JSON.stringify(data));
        setPokemons(data);
        toast.dark('Pokemon adicionado com sucesso!', {
            position: toast.POSITION.TOP_CENTER
        });
    };

    return (
        <CartContext.Provider value={{ pokemons, addPokemon }}>
            {props.children}
        </CartContext.Provider>
    );
}
