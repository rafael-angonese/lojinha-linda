import React, { useEffect, useRef, useState } from 'react';

export type ImageType = { id: number; url: string };

const ImageSlider: React.FC<{ images?: ImageType[] }> = ({ images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<ImageType>();
    const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);

    useEffect(() => {
        if (images && images[0]) {
            carouselItemsRef.current = carouselItemsRef.current.slice(
                0,
                images.length
            );

            setSelectedImageIndex(0);
            setSelectedImage(images[0]);
        }
    }, [images]);

    const handleSelectedImageChange = (newIdx: number) => {
        if (images && images.length > 0) {
            setSelectedImage(images[newIdx]);
            setSelectedImageIndex(newIdx);
        }
    };

    const handleRightClick = () => {
        if (images && images.length > 0) {
            let newIdx = selectedImageIndex + 1;
            if (newIdx >= images.length) {
                newIdx = 0;
            }
            handleSelectedImageChange(newIdx);
        }
    };

    const handleLeftClick = () => {
        if (images && images.length > 0) {
            let newIdx = selectedImageIndex - 1;
            if (newIdx < 0) {
                newIdx = images.length - 1;
            }
            handleSelectedImageChange(newIdx);
        }
    };

    return (
        <>
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
                <div className="absolute flex bottom-0 right-0 p-3">
                    <div
                        onClick={handleLeftClick}
                        className="bg-white w-16 h-16 border-r border-gray-400 flex items-center justify-center text-black"
                    >
                        &#x276E;
                    </div>
                    <div
                        onClick={handleRightClick}
                        className="bg-white w-16 h-16 flex items-center justify-center text-black"
                    >
                        &#x276F;
                    </div>
                </div>
                <img
                    alt="Produto"
                    className="h-full max-h-96 w-full bg-center-center bg-no-repeat bg-cover object-cover object-center rounded"
                    src={selectedImage?.url}
                />
            </a>

            <div className="relative">
                <div className="flex max-w-full overflow-x-hidden">
                    {images &&
                        images.map((image, idx) => (
                            <img
                                onClick={() => handleSelectedImageChange(idx)}
                                src={image.url}
                                key={image.id}
                                className={`h-20 w-20 mt-2 mr-2 max-h-16 border-black border-2 border-solid bg-center-center bg-no-repeat bg-cover ${
                                    selectedImageIndex === idx &&
                                    'border-purple-700 border-2 border-solid'
                                }`}
                                ref={el => (carouselItemsRef.current[idx] = el)}
                            />
                        ))}
                </div>
            </div>
        </>
    );
};

export default ImageSlider;
