import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaUser } from "react-icons/fa6";

export default function Review({ review }) {
  const textRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      const el = textRef.current;
      // Get line height from computed style
      const computed = window.getComputedStyle(el);
      const lineHeight = parseFloat(computed.lineHeight);
      const maxHeight = lineHeight * 3;

      // Measure actual content height
      const actualHeight = el.scrollHeight;

      setIsOverflowing(actualHeight > maxHeight + 1);
    }
  }, [review]);

  return (
    <div className="flex flex-col justify-between text-sm py-4 px-8 w-[85%] max-w-[320px] min-h-[230px] mb-6 relative overflow-visible rounded-lg bg-white shadow-md">
      <div
        className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[60px] h-[60px] rounded-full flex justify-center items-center border-2 border-rich-red-primary"
        style={{
          backgroundColor: "rgba(220, 38, 38, 0.1)",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        <FaUser size={"24px"} className="text-rich-red-primary" />
      </div>
      <div>
        <h3 className="mt-6 font-semibold">
          {review.name}{" "}
          <span className="font-thin text-sm text-gray-400">
            ({review.type})
          </span>
        </h3>
        <p className="flex justify-center my-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              style={{ color: i < review.rating ? "#FFD700" : "lightgray" }}
            >
              <FaStar />
            </span>
          ))}
        </p>
      </div>

      <div className="h-[72px]">
        <p
          ref={textRef}
          className={`text-sm leading-[1.6] text-[#555]  ${
            !expanded && isOverflowing ? "line-clamp-3" : ""
          }`}
        >
          <i>{review.review}</i>
        </p>
        <div className="flex justify-end items-start h-[20px] p-0">
          {" "}
          {isOverflowing && !expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="text-red-600 font-[500] text-sm hover:underline leading-none"
            >
              Read more
            </button>
          )}
        </div>
      </div>

      <p className="text-sm text-[#555]">
        <i>-{review.date}</i>
      </p>
    </div>
  );
}
