import React, { useEffect, useState } from 'react';
import './CustomerReviewCarousel.css';

const reviews = [
  {
    name: "Jane Doe",
    comment: "Amazing food and super fast delivery!",
    date: "May 20, 2025",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "John Smith",
    comment: "Good quality but delivery took a while.",
    date: "May 22, 2025",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 3,
  },
  {
    name: "Sarah Lee",
    comment: "Absolutely love their vegan options!",
    date: "May 25, 2025",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
  },
  {
    name: "Mark Allen",
    comment: "Best burgers in town. Highly recommend!",
    date: "May 27, 2025",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    rating: 5,
  },
  {
    name: "Lisa Brown",
    comment: "Fresh, delicious, and affordable.",
    date: "May 30, 2025",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 4,
  },
  {
    name: "Tom Clarkson",
    comment: "Could improve on packaging.",
    date: "June 1, 2025",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    rating: 2,
  },
];

const CustomerReviewCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev => (prev + visibleCount) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleReviews = reviews.slice(startIndex, startIndex + visibleCount)
    .concat(
      startIndex + visibleCount > reviews.length
        ? reviews.slice(0, (startIndex + visibleCount) % reviews.length)
        : []
    );

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        {visibleReviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img className="avatar" src={review.image} alt={review.name} />
            <div className="review-content">
              <h3 className="name">{review.name}</h3>
              <p className="date">{review.date}</p>
              <p className="comment">"{review.comment}"</p>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.rating ? 'star filled' : 'star'}>★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviewCarousel;
