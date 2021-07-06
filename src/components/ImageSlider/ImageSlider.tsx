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
            <img
                alt="Produto"
                className="h-full max-h-96 w-full bg-center-center bg-no-repeat bg-cover object-cover object-center rounded"
                src={selectedImage?.url}
            />
            <div>
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
                {/* <button className="" onClick={handleLeftClick}>
                    Prev
                </button>
                <button className="" onClick={handleRightClick}>
                    Next
                </button> */}
            </div>
        </>
    );
};

export default ImageSlider;
