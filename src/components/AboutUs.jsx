import React from "react";
import AboutVideo from "./AboutVideo";
import AboutText from "./AboutText";
import GalleryContainer from "./GalleryContainer";
export default function AboutUs() {
  return (
    <section className="md:mt-12">
      <h1 className="font-bold text-2xl md:text-[32px] text-center mb-4  md:mb-8">About Us</h1>
      <div className="p-5 md:flex md:justify-between md:w-[80vw] mx-auto  md:p-0">
        <AboutText />
        <GalleryContainer />
      </div>
    </section>
  );
}
