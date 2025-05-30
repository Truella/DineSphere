import React from "react";
import Banner from "../components/BannerSection/Banner";
import AboutUs from "../components/AboutUs";
import WhyUs from "../components/WhyUs";
import QuickPicks from "../components/QuickPicks";
import ReviewsContainer from "../components/ReviewsContainer";
import RestaurantShowcaseContainer from "../components/RestaurantShowcaseContainer";
export default function Homepage() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <WhyUs />
      <QuickPicks /> 
      <div className="border-t mt-12"></div>
      <RestaurantShowcaseContainer />
      <ReviewsContainer />
    </div>
  );
}
