import styles from "./banner.module.css";
import HeroHeadline from "../HeroHeadline";
export default function Banner() {
  return (
    <div className={styles.bannerImg}>
      <div className="bg-black bg-opacity-50 flex flex-col justify-center items-center w-[100%] h-[100%] absolute">
        <h1 className="font-bold leading-none text-[40px] md:text-[64px] text-center mb-4">
          Welcome
        </h1>
        <h1 className="font-bold leading-none align-top p-0 text-[40px] md:text-[64px] text-center mb-4">
          To
        </h1>
        <HeroHeadline />
        <div className="flex justify-between w-[80%] md:w-[25%] mt-8 md:mt-12">
          <a
            href="/menu"
            className="p-2 w-[120px] text-center rounded-md border border-deep-gold-secondary font-[500] transition-all duration-300 hover:bg-rich-red-primary hover:border-rich-red-primary hover:text-soft-cream"
          >
            Explore Menu
          </a>
          <a
            href="/reservations"
            className=" p-2 w-[120px] text-center rounded-md border border-deep-gold-secondary font-[500] transition-all duration-300 hover:bg-rich-red-primary hover:border-rich-red-primary hover:text-soft-cream"
          >
            Book a Table
          </a>
        </div>
      </div>
    </div>
  );
}
