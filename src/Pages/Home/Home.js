import React from 'react';
import Banner from './Banner';
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
        </div>
    );
};

export default Home;