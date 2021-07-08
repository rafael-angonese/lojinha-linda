import React, { FC } from 'react';

import Close from '../../assets/icons/Close';
import Plus from '../../assets/icons/Plus';
import Minus from '../../assets/icons/Minus';

export interface QuantityProps {
    value: number;
    increase: () => any;
    decrease: () => any;
    handleRemove: React.MouseEventHandler<HTMLButtonElement>;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    max?: number;
}

const Quantity: FC<QuantityProps> = ({
    value,
    increase,
    decrease,
    handleChange,
    handleRemove,
    max = 6
}) => {
    return (
        <div className="flex flex-row h-9">
            <button
                className="flex p-1 border items-center justify-center w-12"
                onClick={handleRemove}
            >
                <Close width={20} height={20} />
            </button>
            <label className="w-full border-accent-2 border ml-2">
                <input
                    className="bg-transparent px-4 w-full h-full focus:outline-none select-none pointer-events-auto"
                    onChange={e =>
                        Number(e.target.value) < max + 1
                            ? handleChange(e)
                            : () => {}
                    }
                    value={value}
                    type="number"
                    max={max}
                    min="0"
                    readOnly
                />
            </label>
            <button
                type="button"
                onClick={decrease}
                className="flex p-1 border items-center justify-center w-12"
                style={{ marginLeft: '-1px' }}
                disabled={value <= 1}
            >
                <Minus width={18} height={18} />
            </button>
            <button
                type="button"
                onClick={increase}
                className="flex p-1 border items-center justify-center w-12"
                style={{ marginLeft: '-1px' }}
                disabled={value < 1 || value >= max}
            >
                <Plus width={18} height={18} />
            </button>
        </div>
    );
};

export default Quantity;
