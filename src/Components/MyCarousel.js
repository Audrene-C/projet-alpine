import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Blanc from './assets/configurateur/couleurs/selection/blanc.jpg';
import Bleu from './assets/configurateur/couleurs/selection/bleu.jpg';
import Noir from './assets/configurateur/couleurs/selection/noir.jpg';

const MyCarousel = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Blanc}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Bleu}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Noir}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )

}

export default MyCarousel;