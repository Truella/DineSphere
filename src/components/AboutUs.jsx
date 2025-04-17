import React from "react";
import AboutVideo from "./AboutVideo";
import AboutText from "./AboutText";
import GalleryContainer from "./GalleryContainer";
export default function AboutUs() {
  return (
    <section className="md:mt-12">
      <div className="p-5 md:flex md:justify-between items-start md:w-[80vw] mx-auto md:p-0">
        <GalleryContainer />
        <AboutText />
      </div>
    </section>
  );
}
