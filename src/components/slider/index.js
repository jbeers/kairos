import React, { useState, useEffect } from 'react';
import './Slider.css';

const SliderDot = ({ active, onClick }) => {
    const classes = [
        'slider__dot',
        active ? 'slider__dot--active' : ''
    ].join(' ');


    return <div className={classes} onClick={onClick}></div>
}

const SliderImage = ({ imageUrl, active }) => {
    const classes = [
        'slider__image',
        active ? 'slider__image--active' : ''
    ].join(' ');


    return <div className={classes}>
        <img src={imageUrl} />
    </div>
}


export const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const moveRight = () => setCurrentIndex(currentIndex + 1 === images.length ? 0 : currentIndex + 1);
    const moveLeft = () => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);

    useEffect(() => {
        const id = setTimeout(() => {
            moveRight();
        }, 5000);

        return () => {
            clearTimeout(id);
        };
    }, [currentIndex]);

    return <div className={'slider'}>
        <div className={'slider__images'}>
            {
                images.map((imageUrl, i) => <SliderImage imageUrl={imageUrl} active={i === currentIndex} key={i} />)
            }
        </div>
        <div className="slider__controls">
            <div className="slider__control-left" onClick={moveLeft} >&lt;</div>
            <div className="slider__control-right" onClick={moveRight} >&gt;</div>
            <div className="slider__control-dots">
                {
                    images.map((image, i) => <SliderDot active={i === currentIndex} onClick={() => setCurrentIndex(i)} />)
                }
            </div>
        </div>
    </div>
}