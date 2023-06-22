import React, { useState, useEffect, useRef, useMemo } from 'react';
import LandingPageBanner from '../../static/banners/banner';
const ImageScroll = () => {
    const ref = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = () => {
        const element = ref.current;
        const imageWidth = window.screen.width + 10// Round down the image width

        if (element.scrollLeft + element.offsetWidth >= element.scrollWidth) {
            // Reached the end, scroll back to the beginning
            element.scrollTo({ left: 0, behavior: 'smooth' });
            setCurrentIndex(0);
        } else {
            // Scroll by the width of a single image
            element.scrollTo({
                left: element.scrollLeft + imageWidth,
                behavior: 'smooth',
            });
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleScroll();
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    const memoizedImages = useMemo(
        () =>
            LandingPageBanner.map((image, index) => (
                <img
                    style={{ animationDelay: `${1 * index}` }}
                    key={index}
                    src={image}
                    alt="Image"
                />
            )),
        []
    );

    return (
        <>
            <div className="hero-images" ref={ref}>
                {memoizedImages}
            </div>
        </>
    );
};

export default ImageScroll;
