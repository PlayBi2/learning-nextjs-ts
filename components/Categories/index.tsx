import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";


const categories: any[] = [
  {
    src: "https://cdn.shopify.com/s/files/1/0016/2915/9471/collections/cate-8_330x303.jpg?v=1627635522",
    title: "Cat Food"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0016/2915/9471/collections/cate-7_330x303.jpg?v=1635411552",
    title: "Cat Toys"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0016/2915/9471/collections/cate-5_330x303.jpg?v=1627635440",
    title: "Dog Food"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0016/2915/9471/collections/cate-6_330x303.jpg?v=1627635402",
    title: "Dog Toys"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0016/2915/9471/files/cate-9_330x303.jpg?v=1630348467",
    title: "Dog Supplements"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0016/2915/9471/files/cate-2_330x307.jpg?v=1630348441",
    title: "Shop Cat"
  }
]

export default function Categories() {
  return (
    <div className="select-none">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
          categories.map((item,index)=>{
            return (
              <SwiperSlide key={index}>
                <a href="" className="imgLink overflow-hidden block w-[100%] rounded-[10px]">
                  <img src={item.src} alt="" className="imgLink-hover:scale-110 hover:scale-110 ease-linear duration-300 transition-all object-center object-cover w-[100%] h-[100%]"/>
                </a>
                <a href="" className="block text-center text-[22px] mt-4 font-medium">{item.title}</a>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}




