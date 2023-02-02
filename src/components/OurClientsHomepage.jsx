import React, { useEffect, useState } from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  PngOurclienteight,
  PngOurclientfive,
  PngOurclientfour,
  PngOurclientone,
  PngOurclientseven,
  PngOurclientsix,
  PngOurclientthree,
  PngOurclienttwo,
} from "../assets";

export default function OurClientsHomepage() {
  const [slidesPerView, setSlidesPerView] = useState(8);
  function changeSlidesPerView() {
    if (window.innerWidth < 5) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 700) {
      setSlidesPerView(3);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(5);
    } else if (window.innerWidth < 1300) {
      setSlidesPerView(6);
    } else {
      setSlidesPerView(8);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);
  return (
    <div className="our__clients__homepage">
      <div className="our__clients__homepage__container">
        <div className="our__clients__homepage__container__title">
          Our Clients
        </div>
        <div className="our__clients__homepage__container__clients">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            style={{
              marginTop: "2em",
            }}
            loop
            modules={[Autoplay, FreeMode]}
            freeMode={true}
            speed={3000}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            <SwiperSlide>
              <div className="our__clients__homepage__container__clients__entry">
                <img src={PngOurclientone} alt="ourclientone" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="our__clients__homepage__container__clients__entry">
                <img src={PngOurclienttwo} alt="ourclienttwo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="our__clients__homepage__container__clients__entry">
                <img src={PngOurclientthree} alt="ourclientthree" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="our__clients__homepage__container__clients__entry">
                <img src={PngOurclientfour} alt="ourclientfour" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="our__clients__homepage__container__clients__entry">
                <img src={PngOurclientfive} alt="ourclientfive" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="our__clients__homepage__container__clients__entry">
                <img src={PngOurclientsix} alt="ourclientsix" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="our__clients__homepage__container__clients__entry">
                <img src={PngOurclientseven} alt="ourclientseven" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="our__clients__homepage__container__clients__entry">
                <img src={PngOurclienteight} alt="ourclienteight" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
