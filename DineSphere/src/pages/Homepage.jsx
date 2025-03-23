import React from "react";
import Banner from "../components/BannerSection/Banner";
import AboutUs from "../components/AboutUs";
import WhyUs from "../components/WhyUs";
import QuickPicks from "../components/BannerSection/QuickPicks";
export default function Homepage() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <WhyUs/>
      <QuickPicks/>
    </div>
  );
}
