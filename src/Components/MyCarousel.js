import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';

const MyCarousel = () => {

    const carousel = useSelector(state => state.carousel)
    const createItems = () => {
        console.log('carousel: ', carousel)
        return carousel.map((item, i) => {
            return(
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={item}
                    alt={`slide ${i}`}
                    />
                </Carousel.Item>
            )            
        })        
    }

    return (
        <div className="carou">
            <Carousel>
                {createItems()}
            </Carousel>
        </div>
    )

}

export default MyCarousel;