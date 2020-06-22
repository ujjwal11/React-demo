import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselBox = () => {
    return (
        <Carousel className="main-carousel pt-4 col-12">
            <Carousel.Item>
                <img
                className="w-100 d-none d-sm-block"
                src="/assets/images/3.jpg"
                alt="slide one"
                />
                <img
                className="w-100block d-sm-none"
                src="/assets/images/3.jpg"
                alt="slide one"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="w-100 d-none d-sm-block"
                src="/assets/images/2.jpg"
                alt="slide two"
                />
                <img
                className="w-100 d-block d-sm-none"
                src="/assets/images/2.jpg"
                alt="slide two"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="w-100 d-none d-sm-block"
                src="/assets/images/1.jpg"
                alt="slide three"
                />
                <img
                className="w-100 d-block d-sm-none"
                src="/assets/images/1.jpg"
                alt="slide three"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="w-100 d-none d-sm-block"
                src="/assets/images/4.jpg"
                alt="slide four"
                />
                <img
                className="w-100 d-block d-sm-none"
                src="/assets/images/4.jpg"
                alt="slide four"
                />
            </Carousel.Item>
            </Carousel>
    )
}

export default CarouselBox