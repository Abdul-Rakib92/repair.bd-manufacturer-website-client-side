import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Owner from './Owner';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <Owner></Owner>
            <Contact></Contact>
        </div>
    );
};

export default Home;