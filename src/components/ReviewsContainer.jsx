import React from 'react'
import Review from './Review'

export default function ReviewsContainer() {
    const reviews = [
        {
          id: 1,
          name: "Aisha Bello",
          rating: 5,
          review: "Absolutely loved the meals! Everything was fresh and delicious. Will definitely come back.",
          date: "2025-03-20",
        },
        {
          id: 2,
          name: "David Okafor",
          rating: 4,
          review: "Great food and ambiance. The service was a bit slow, but overall a wonderful experience.",
          date: "2025-03-18",
        },
        {
          id: 3,
          name: "Fatima Sule",
          rating: 5,
          review: "Best grilled chicken I’ve ever had! Highly recommend this place.",
          date: "2025-03-15",
        },
        {
          id: 4,
          name: "John Adewale",
          rating: 3,
          review: "The food was good, but the portions were smaller than expected. Still a nice place to eat.",
          date: "2025-03-12",
        },
        {
          id: 5,
          name: "Sophia Williams",
          rating: 5,
          review: "Incredible service and amazing meals! The desserts were a highlight.",
          date: "2025-03-10",
        },
        {
          id: 6,
          name: "Chinedu Nwankwo",
          rating: 4,
          review: "A cozy restaurant with a great menu. I loved the local cuisine options.",
          date: "2025-03-08",
        },
        {
          id: 7,
          name: "Mary Johnson",
          rating: 5,
          review: "Fantastic experience! The flavors were rich and authentic. Will recommend to everyone.",
          date: "2025-03-05",
        },
      ];
      
  return (
    <section>
        {reviews.map((review)=><Review review={review}/>)}
    </section>
  )
}
