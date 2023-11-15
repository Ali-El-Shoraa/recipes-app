import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import useVeggie from "../data/useVeggie";

function Veggie() {
  const { veg, num } = useVeggie();

  return (
    <div className="container mx-auto px-4">
      <h3 className=" text-2xl text-[#383838] my-8 font-['Montserrat',sans-serif] font-bold">
        Our Vegetarian Picks
      </h3>

      <Swiper
        freeMode={true}
        navigation
        modules={[Navigation, FreeMode, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={num}
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
        <div className="">
          {veg.map((rec) => {
            return (
              <SwiperSlide
                key={rec.id}
                className="relative rounded-3xl overflow-hidden"
              >
                <Link to={"/recipes-app/recipe/" + rec.id}>
                  <p className="absolute bottom-0 left-2/4 translate-x-[-50%] text-center text-white px-3 py-5 z-10 w-full font-bold">
                    {rec.title}
                  </p>
                  <img src={rec.image} alt={rec.title} />
                  <div className="top-0 left-0 absolute z-[3] w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)]"></div>
                </Link>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
}

export default Veggie;
