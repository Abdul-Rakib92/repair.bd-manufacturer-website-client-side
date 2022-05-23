import React from 'react';
// import './Review.css';

const Review = (props) => {
    
    const {name, description, rating } = props.review;

    return (
        <div className='bg-red-50 border-2 border-solid border-slate-700 m-8 w-2/3 p-8 rounded-full text-xl'>
            <h4> <span className='font-bold'>Name:</span> {name}</h4>
            <p><span className='font-bold'>Review:</span> {description}</p>
            <h5><span className='font-bold'>Rating:</span> {rating} star</h5>
            
        </div>
    );
};

export default Review;