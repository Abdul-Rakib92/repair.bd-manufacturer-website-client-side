import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Owner from './Owner';
import Reviews from './Reviews';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <Reviews></Reviews>
            <Owner></Owner>
            <Contact></Contact>
        </div>
    );
};

export default Home;