import React from "react";
import styles from "./galleryContainer.module.css";
import img1 from "../assets/images/pexels-ton-nattapong-132623970-10939223.jpg";
import img2 from "../assets/images/imagesLg/brooke-lark--F_5g8EEHYE-unsplash (1).jpg";
import img3 from "../assets/images/pexels-willpicturethis-2641886.jpg";
import img4 from "../assets/images/pexels-jonathanborba-2983101.jpg";

export default function GalleryContainer() {
  return (
    <div
      className={`${styles.gridContainer} w-[90vw] h-auto md:w-[450px] md:h-[450px]`}
    >
      <div className={`${styles.gridItem} `}>
        <img className="w-[100%] h-[100%]" src={img1} />
      </div>
      <div className={`${styles.tall}`}>
        <img className="w-[100%] h-[100%]" src={img2} />
      </div>
      <div className={`${styles.tall}`}>
        <img className="w-[100%] h-[100%]" src={img3} />
      </div>
      <div className={`${styles.gridItem} `}>
        {" "}
        <img className="w-[100%] h-[100%]" src={img4} />
      </div>
    </div>
  );
}
