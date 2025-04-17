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
    <section className="my-12 md:w-[80vw] w-[100%] m-auto text-center rounded-md shadow-sm">
  <div>
    <h2 className="font-semibold text-forest-green">TESTIMONIALS</h2>
    <h2
      className="font-[600] text-2xl mb-4 text-rich-red-primary"
      style={{ textShadow: "0 1px 4px rgba(0,0,0,0.1)" }}
    >
      What Our Customers Say
    </h2>
  </div>

  <div className="flex justify-center md:justify-between flex-wrap mt-12">
    {reviews.map((review) => (
      <Review key={review.id} review={review} />
    ))}
  </div>

  <div className="">
    <button className="bg-rich-red-primary text-white px-6 py-2 rounded-md shadow-md hover:bg-red-800 transition">
      View More
    </button>
  </div>
</section>
  );
}
