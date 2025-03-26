import React from "react";

export default function Review({ review }) {
  return (
    <div className="w-[90vw] md:w-[80vw] mx-auto">
      <h3>{review.name}</h3>
      <p>Rating: {review.rating}</p>
      <p>{review.review}</p>
      <p>{review.date}</p>
    </div>
  );
}
