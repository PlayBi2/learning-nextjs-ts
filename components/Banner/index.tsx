import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Banner() {

    const textCSS: string = "text-6xl font-bold text-white font-[Bangers] italic font-[cursive] uppercase leading-[1.1] mb-[8px]"
    const bigTextCSS: string = "text-[148px] font-bold text-white italic font-[Bangers] font-[cursive] uppercase leading-[1.1]"
    const boxCSS: string = "absolute text-center top-[200px] left-[100px]"

    return (
        <div className="mb-10 select-none">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="relative">
                    <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/files/slide11_1920x996.jpg?v=1625112184" />
                    <div className={boxCSS}>
                        <h1 className={textCSS}>Hight Quality</h1>
                        <h1 className={bigTextCSS}>Pet Food</h1>
                        <p className="text-white text-center mt-[10px]">Sale up to 40% off today</p>
                        <button className="mt-[35px] px-[30px] py-[11px] bg-black uppercase font-semibold mx-auto text-white rounded-[25px] hover:bg-primary text-[15px]">Shop now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/files/slide12_1920x996.jpg?v=1625128622" />
                    <div className={boxCSS}>
                        <h1 className={textCSS}>Hight Quality</h1>
                        <h1 className={bigTextCSS}>Pet Food</h1>
                        <p className="text-white text-center mt-[10px]">Sale up to 40% off today</p>
                        <button className="mt-[35px] px-[30px] py-[11px] bg-black uppercase font-semibold mx-auto text-white rounded-[25px] hover:bg-primary text-[15px]">Shop now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/files/slide13_1920x996.jpg?v=1625128754" />
                    <div className={boxCSS}>
                        <h1 className={textCSS}>Hight Quality</h1>
                        <h1 className={bigTextCSS}>Pet Food</h1>
                        <p className="text-white text-center mt-[10px]">Sale up to 40% off today</p>
                        <button className="mt-[35px] px-[30px] py-[11px] bg-black uppercase font-semibold mx-auto text-white rounded-[25px] hover:bg-primary text-[15px]">Shop now</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
