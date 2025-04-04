import React from "react";
import Review from "./Review";

export default function ReviewsContainer() {
  const reviews = [
    {
      id: 1,
      name: "Aisha Bello",
      rating: 5,
      review:
        "Absolutely loved the meals! Everything was fresh and delicious. Will definitely come back.",
      date: "2025-03-20",
    },
    {
      id: 2,
      name: "David Okafor",
      rating: 4,
      review:
        "Great food and ambiance. The service was a bit slow, but overall a wonderful experience.",
      date: "2025-03-18",
    },
    {
      id: 3,
      name: "Fatima Sule",
      rating: 5,
      review:
        "Best grilled chicken I’ve ever had! Highly recommend this place.",
      date: "2025-03-15",
    },
  ];

  return (
    <section className="mt-12 border-black md:w-[80vw] m-auto">
      <div>
        <h2>TESTIMONIALS</h2>
        <h2>What Our Customers Say</h2>
      </div>

      <div className="flex justify-between items-center">
        {" "}
        {reviews.map((review) => (
          <Review review={review} />
        ))}
      </div>
      <div><button>View More</button></div>
    </section>
  );
}
