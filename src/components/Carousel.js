import React from 'react';
import { MDBCarousel, MDBCarouselItem, } from 'mdb-react-ui-kit';
import corouselCar from '../images/corouselCar.jpg';
import corousel2 from '../images/corousel2.webp';
import corousel3 from '../images/corousel3.jpg';

function Carousel() {
    return (
        <div>
            <MDBCarousel showControls showIndicators>
                <MDBCarouselItem
                    className='w-100 d-md-block'
                    itemId={1}
                    src={corouselCar}
                    alt='...'
                >
                    <h5>New Look New Feel</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100 d-md-block'
                    itemId={2}
                    src={corousel2}
                    alt='...'
                >
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100 d-md-block'
                    itemId={3}
                    src={corousel3}
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
            </MDBCarousel>
        </div>
    )
}

export default Carousel
