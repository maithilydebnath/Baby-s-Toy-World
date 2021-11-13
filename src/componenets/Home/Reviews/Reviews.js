import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://mysterious-gorge-90895.herokuapp.com/addReview')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <h2 className="m-3"><b>Reviews</b></h2>
            <div  className="product-container container ">
                {
                    reviews.map(review => 
                    <div className="border border-2" key={review._id}> 
                        <h5 className="mt-3">Client Email: {review.email}</h5>
                        <p className="px-2">Comments: {review.comments}</p>
                        <p>Ratings: {review.ratings}</p>
                        <Rating 
                        initialRating ={review.ratings}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly></Rating>
                        
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;