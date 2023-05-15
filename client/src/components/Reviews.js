import React from 'react';
//Hooks
import { useState, useEffect } from "react";
//Services
import { getAll, create } from "../services/review";

const Reviews = () => {
    const [Reviews, setReviews] = useState([])
    const [newReview, setNewReviews] = useState('')
    
    useEffect(() =>{
        getAll().then(returnedData => setReviews(returnedData))
      },[])
    
      const addReviews = (event) => {
        event.preventDefault()
        const reviewObject = {content: newReview}
        create(reviewObject).then(ruturnedData => {
          setReviews(Reviews.concat(ruturnedData))
        })
      }
    
      const handleReviewChange = (event) => {
        console.log(event.target.value)
        setNewReviews(event.target.value)
      }
    
    return (
        <div className="review-form">
            <ul>
            {Reviews.map(review =>
            <li key={review.id}>
                <p>{review.content}</p>
            </li>
            )}
            </ul>
            <form onSubmit={addReviews}>
                <input className="review-field" 
                    value={newReview}
                    onChange={handleReviewChange}
                />
                <button type="submit" className="review-button">Post</button>
            </form>
        </div>
    )
}

export default Reviews