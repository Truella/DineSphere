import styles from "./banner.module.css";
import HeroHeadline from "../HeroHeadline";
export default function Banner() {
  return (
    <div className={styles.bannerImg}>
      <div className="bg-black bg-opacity-50 flex flex-col justify-center items-center w-[100%] h-[100%] absolute">
      <h1 className="font-bold text-3xl md:text-[64px] text-center mb-4  md:mb-8">Welcome</h1>
      <h1 className="font-bold text-3xl md:text-[64px] text-center mb-4 md:mb-8">To</h1>
        <HeroHeadline />
        <div className="flex justify-between w-[80%] md:w-[25%] mt-8 md:mt-12">
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
