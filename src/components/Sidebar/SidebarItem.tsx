import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';

import Quantity from '../Quantity';

type pokemonProps = {
    id: number;
    name: string;
    image_url: string;
};

type Props = {
    pokemon: pokemonProps;
};

const SidebarItem: React.FC<Props> = ({ pokemon }) => {
    const [removing, setRemoving] = useState(false);
    const [quantity, setQuantity] = useState<number>(5);

    const handleChange = async ({
        target: { value }
    }: ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(value));
    };

    const increaseQuantity = async (n = 1) => {
        const val = Number(quantity) + n;
        setQuantity(val);
    };

    const handleRemove = async () => {
        setRemoving(true);
        try {
        } catch (error) {
            setRemoving(false);
        }
    };

    return (
        <li className="flex flex-col py-4">
            <div className="flex flex-row space-x-4 py-4">
                <div className="w-16 h-16 bg-violet relative overflow-hidden cursor-pointer z-0">
                    <img
                        src={pokemon.image_url}
                        alt="Produto"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="flex-1 flex flex-col text-base">
                    <Link href={'/product/123456'}>
                        <span className="font-medium cursor-pointer pb-1">
                            {pokemon.name}
                        </span>
                    </Link>

                    <div className="text-sm tracking-wider">10x</div>
                </div>

                <div className="flex flex-col justify-between space-y-2 text-sm">
                    <span>R$ 99,99</span>
                </div>
            </div>
            <Quantity
                value={quantity}
                handleRemove={handleRemove}
                handleChange={handleChange}
                increase={() => increaseQuantity(1)}
                decrease={() => increaseQuantity(-1)}
            />
        </li>
    );
};

export default SidebarItem;
