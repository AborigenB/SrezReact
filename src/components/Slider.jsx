import React from 'react';
import { useState, useRef } from 'react'
import products from '../data/products';

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const sliderListRef = useRef(null);
    const slideRef = useRef(null);
    const sliderList = products;
    function prevSlide() {
        sliderListRef.current.scrollLeft -= slideRef.current.offsetWidth; 
    }
    function nextSlide() {
        sliderListRef.current.scrollLeft += slideRef.current.offsetWidth;
    }
    return (
        <div className='flex w-full justify-center items-center'>
            <div className='flex items-center justify-center h-60 gap-2 w-6/12'>
                
                <button onClick={prevSlide}>Налево</button>
                
                <div className='flex items-center overflow-x-scroll scroll-snap-x mandatory scroll-smooth h-full w-6/12' ref={sliderListRef}>
                    {sliderList.map((slide) => {
                        return (
                            
                            <div key={slide.id} className='snap-start min-w-full h-full flex justify-center' ref={slideRef}>
                                <img src={slide.image} className='h-full object-contain' alt="" />
                            </div>

                        )
                    })}
                </div>
                
                <button onClick={nextSlide}>Направо</button>

            </div>
        </div>
    );
};