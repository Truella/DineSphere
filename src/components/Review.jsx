import React from "react";
import styles from "./review.module.css";
export default function Review({ review }) {
  return (
    <div className={`${styles.review} p-2 w-[90vw] md:w-[80vw] border border-black `}>
      <h3>{review.name}</h3>
      <p>Rating: {review.rating}</p>
      <p>{review.review}</p>
      <p>{review.date}</p>
    </div>
  );
}
