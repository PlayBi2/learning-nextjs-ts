import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation, Pagination } from "swiper";
import ProductItem from "../ProductItem";

export default function SliderProduct({ products, textLeft, btn }: any) {
    return (
        <>
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
                    products.map((item: any) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <ProductItem product={item} textLeft={textLeft} btn={btn}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}
