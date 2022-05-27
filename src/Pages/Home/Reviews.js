import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from './Review';

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

    return (
        <div>
            <h1 className='text-primary text-center mt-3 text-4xl font-bold'>Reviews</h1>

            {
                reviews.map((review) => (
                    <Review key={review._id} 
                    review={review}>
                        
                    </Review>
                  ))
            }

            
        </div>
    );
};

export default Reviews;