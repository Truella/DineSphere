import React from "react";
import styles from "./review.module.css";
import { FaUser } from "react-icons/fa6";
export default function Review({ review }) {
  return (
    <div
      className={`${styles.review} p-2 w-[75%] max-w-[320px] mb-12 relative overflow-visible border `}
    >
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[50px] h-[50px] rounded-[50%] flex justify-center items-center border border-forest-green">
        <FaUser />
      </div>
      <h3 className="mt-4">{review.name}</h3>
      <p>Rating: {review.rating}</p>
      <p>{review.review}</p>
      <p>{review.date}</p>
    </div>
  );
}
