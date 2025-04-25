import { FaShoppingCart, FaHeart, FaClipboardList } from "react-icons/fa"; // Or any other icons you prefer

export default function FeaturedMeal({ curr }) {
  return (
    <div className="bg-white rounded-xl min-w-[250px] w-[250px] h-[350px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] mb-6 hover:shadow-lg hover:bg-rich-red-primary  transition-all duration-500 ease-in-out p-4 overflow-hidden group">
      {/* Image container */}
      <div className="h-[80%] w-full overflow-hidden rounded-md relative group/image">
        <div className="bg-[rgba(0,0,0,0.5)] h-full w-full transition-all duration-500 ease-in-out absolute top-0 left-0 opacity-0 group-hover/image:opacity-100 z-10"></div>

        <img
          src={`${import.meta.env.BASE_URL}${curr.img}`}
          alt={curr.alt}
          className="h-full w-full rounded-md object-cover transition-transform duration-500 ease-in-out group-hover/image:scale-110"
        />

        {/* Icons on hover */}
        <div className="absolute inset-0 z-[100] flex justify-center items-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="flex gap-4">
            {/* Add to Cart Icon */}
            <div className="bg-white p-2 rounded-full text-rich-red-primary hover:text-white hover:bg-rich-red-primary transition-all duration-300 ease-in-out">
              <FaShoppingCart size={24} />
            </div>

            {/* Favorite Icon */}
            <div className="bg-white p-2 rounded-full text-rich-red-primary hover:text-white hover:bg-rich-red-primary transition-all duration-300 ease-in-out">
              <FaHeart size={24} />
            </div>

            {/* Order Icon */}
            <div className="bg-white p-2 rounded-full text-rich-red-primary hover:text-white hover:bg-rich-red-primary transition-all duration-300 ease-in-out">
              <FaClipboardList size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Meal Name */}
      <div className="h-[20%] flex justify-center items-center">
        <p className="font-[500] text-rich-red-primary transition-colors duration-500 group-hover:text-soft-cream">
          {curr.name}
        </p>
      </div>
    </div>
  );
}
