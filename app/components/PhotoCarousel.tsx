'use client';

import { useState, useEffect } from 'react';

interface PhotoCarouselProps {
    images: string[];
}

export default function PhotoCarousel({ images }: PhotoCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div id="demo" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ul className="carousel-indicators">
                {images.map((_, index) => (
                    <li
                        key={index}
                        data-target="#demo"
                        data-slide-to={index}
                        className={index === activeIndex ? 'active' : ''}
                        onClick={() => setActiveIndex(index)}
                        style={{ cursor: 'pointer' }}
                    ></li>
                ))}
            </ul>

            {/* The slideshow */}
            <div className="carousel-inner">
                {images.map((img, index) => (
                    <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                        <img src={img} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%' }} />
                    </div>
                ))}
            </div>

            {/* Left and right controls */}
            <a
                className="carousel-control-prev"
                href="#demo"
                role="button"
                data-slide="prev"
                onClick={(e) => {
                    e.preventDefault();
                    prevSlide();
                }}
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#demo"
                role="button"
                data-slide="next"
                onClick={(e) => {
                    e.preventDefault();
                    nextSlide();
                }}
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}
