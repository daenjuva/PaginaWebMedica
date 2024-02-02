import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

export const Carousel = ({ data, autoSlideInterval = 5000 }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((slide + 1) % data.length);
    };

    const prevSlide = () => {
        setSlide((slide - 1 + data.length) % data.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, autoSlideInterval);

        return () => {
            // Limpiar el intervalo al desmontar el componente
            clearInterval(intervalId);
        };
    }, [slide, autoSlideInterval]);

    return (
        <div className="carousel">
            <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
            {data.map((item, idx) => {
                return (
                    <img
                        src={item.src}
                        alt={item.alt}
                        key={idx}
                        className={slide === idx ? "slide" : "slide slide-hidden"}
                    />
                );
            })}
            <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
            <span className="indicators">
                {data.map((_, idx) => (
                    <button
                        key={idx}
                        className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                        onClick={() => setSlide(idx)}
                    ></button>
                ))}
            </span>
        </div>
    );
};
