import React from "react";
import styles from "./galleryContainer.module.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "/images/bolognese.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "/images/Burger.jpg";

export default function GalleryContainer() {
  return (
    <div
      className={`${styles.gridContainer} w-[90vw] h-auto md:w-[500px] md:h-[500px]`}
    >
      <div className={`${styles.gridItem} rounded-md overflow-hidden shadow-md`}>
        <img className="w-[100%] h-[100%]" src={img1} />
      </div>
      <div className={`${styles.tall} rounded-md overflow-hidden shadow-md`}>
        <img className="w-[100%] h-[100%]" src={img2} />
      </div>
      <div className={`${styles.tall} rounded-md overflow-hidden shadow-md`}>
        <img className="w-[100%] h-[100%]" src={img3} />
      </div>
      <div className={`${styles.gridItem} rounded-md overflow-hidden shadow-md`}>
        {" "}
        <img className="w-[100%] h-[100%]" src={img4} />
      </div>
    </div>
  );
}
