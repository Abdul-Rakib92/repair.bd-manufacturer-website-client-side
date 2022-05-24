import React from 'react';
import notfound from '../assets/images/notfound.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold my-3'>This page is Not Available...</h2>
            <img className=' h-screen lg:pl-16' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;