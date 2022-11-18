import React from 'react';
import WashPackages from './WashPackages';
import Carousel from './Carousel';
import OfferPackages from './OfferPackages';
import Header from './Header';

function Home() {
    return (
        <>
            <Header />
            <Carousel />
            <OfferPackages />
        </>
    )
}

export default Home;