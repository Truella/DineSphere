import styles from "./banner.module.css";
import HeroHeadline from "../HeroHeadline";
export default function Banner() {
  return (
    <div className={styles.bannerImg}>
      <div className="bg-black bg-opacity-50 flex flex-col justify-center items-center w-[100%] h-[100%] absolute">
        <HeroHeadline />
        <div className="flex justify-between py-3 w-[80%] md:w-[20%] mt-12">
          <a href="/menu" className="p-2 rounded-md border">
            Explore Menu
          </a>
          <a href="/reservations" className=" p-2 rounded-md border">
            Book a Table
          </a>
        </div>
      </div>
    </div>
  );
}
