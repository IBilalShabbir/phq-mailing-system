import React, { useEffect, useState } from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PngStartyour } from "../assets";
import RecentlyListedCard from "./RecentlyListedCard";

export default function RecentlyListedAssets() {
  const [slidesPerView, setSlidesPerView] = useState(5);
  function changeSlidesPerView() {
    if (window.innerWidth < 540) {
      setSlidesPerView(1.2);
    } else if (window.innerWidth < 800) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(3);
    } else if (window.innerWidth < 1400) {
      setSlidesPerView(4);
    } else {
      setSlidesPerView(5);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);
  return (
    <div className="recently__listed__assets">
      <div className="our__clients__homepage__container">
        <div className="our__clients__homepage__container__title">
          Recently Listed Assets
        </div>
        <div className="recently__listed__assets__cards">
          <Swiper
            style={{
              marginTop: "2em",
            }}
            loop
            spaceBetween={30}
            modules={[Autoplay, FreeMode]}
            freeMode={true}
            speed={3500}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={slidesPerView}
          >
            <SwiperSlide>
              <RecentlyListedCard
                heading="New Listing"
                bottombtn="Real Estate"
                mainheading="Studio in Studio One - Dubai Marina"
                budget="736,393"
                investers="116 investors"
              />
            </SwiperSlide>
            <SwiperSlide>
              <RecentlyListedCard
                heading="New Listing"
                bottombtn="Gold"
                mainheading="Studio in Studio One - Dubai Marina"
                budget="736,393"
                investers="116 investors"
              />
            </SwiperSlide>
            <SwiperSlide>
              <RecentlyListedCard
                heading="New Listing"
                bottombtn="Real Estate"
                mainheading="Studio in Studio One - Dubai Marina"
                budget="736,393"
                investers="116 investors"
              />
            </SwiperSlide>
            <SwiperSlide>
              <RecentlyListedCard
                heading="New Listing"
                bottombtn="dubai"
                mainheading="Studio in Studio One - Dubai Marina"
                budget="736,393"
                investers="116 investors"
              />
            </SwiperSlide>
            <SwiperSlide>
              <RecentlyListedCard
                heading="New Listing"
                bottombtn="dubai"
                mainheading="Studio in Studio One - Dubai Marina"
                budget="736,393"
                investers="116 investors"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="recently__listed__assets__cards__see__more">
          <button className="recently__listed__assets__cards__see__more__btn">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
