import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import Skills from "../list/skills";
import { RxArrowTopRight } from "react-icons/rx";

function Carousel() {
  return (
    <div className="item-center flex flex-col justify-center">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90] !pb-12 lg:max-w-[80%]"
      >
        {Skills.map((item) => (
          <SwiperSlide key={item.name}>
            <div className="group relative flex h-[150px] w-[130px] flex-col gap-3 rounded-lg px-4 py-5 text-white shadow-md lg:h-[200px] lg:w-[200px]">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${item.imgPath})`,
                  backgroundSize: "fit",
                }}
              />

              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />

              <div className="relative flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h1 className="text-sm lg:text-base">{item.name}</h1>
                <p className="lg:text-sm">Item Description</p>
              </div>

              {/* Icon stays visible */}
              <RxArrowTopRight className="absolute bottom-4 left-4 h-[25px] w-[25px] text-white duration-100 group-hover:rotate-45 group-hover:text-blue-500" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
