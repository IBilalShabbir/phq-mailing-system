import React from "react";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PngStartyour } from "../assets";

export default function RecentlyListedAssets() {
  return (
    <div className="recently__listed__assets">
      <div className="our__clients__homepage__container">
        <div className="our__clients__homepage__container__title">
          Recently Listed Assets
        </div>
        <div className="recently__listed__assets__cards">
          <div className="recently__listed__assets__slider">
            <div className="recently__listed__assets__slider__item">
              <div className="recently__listed__assets__slider__item__heading">
                New Listing
              </div>
              <Swiper
                spaceBetween={0}
                loop
                modules={[Autoplay, Pagination, FreeMode]}
                freeMode={true}
                speed={3000}
                pagination={{
                  clickable: true,
                }}
                scrollbar={{ draggable: true }}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
              >
                <SwiperSlide>
                  <div className="recently__listed__assets__slider__item__entry">
                    <img src={PngStartyour} alt="PngStartyour" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="recently__listed__assets__slider__item__entry">
                    <img src={PngStartyour} alt="PngStartyour" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="recently__listed__assets__slider__item__entry">
                    <img src={PngStartyour} alt="PngStartyour" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="recently__listed__assets__slider__item__entry">
                    <img src={PngStartyour} alt="PngStartyour" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="recently__listed__assets__slider__item__entry">
                    <img src={PngStartyour} alt="PngStartyour" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="recently__listed__assets__slider__item__bottom">
              <button className="recently__listed__assets__slider__item__bottom__btn">
                Real Estate
              </button>
              <div className="recently__listed__assets__slider__item__bottom__heading">
                Studio in Studio One - Dubai Marina
              </div>
              <div className="recently__listed__assets__slider__item__bottom__price">
                <div className="recently__listed__assets__slider__item__bottom__price__value">
                  <span>AED </span>736,393
                </div>
                <div className="recently__listed__assets__slider__item__bottom__price__investors">
                  116 investors
                </div>
              </div>
              <div className="recently__listed__assets__slider__item__bottom__detail">
                <div className="recently__listed__assets__slider__item__bottom__detail__entry">
                  <div className="recently__listed__assets__slider__item__bottom__detail__entry__title">
                    Annualised return
                  </div>
                  <div className="recently__listed__assets__slider__item__bottom__detail__entry__value">
                    11.10%
                  </div>
                </div>
                <div className="recently__listed__assets__slider__item__bottom__detail__entry">
                  <div className="recently__listed__assets__slider__item__bottom__detail__entry__title">
                    Funded Date
                  </div>
                  <div className="recently__listed__assets__slider__item__bottom__detail__entry__value">
                    12 Jan 2023
                  </div>
                </div>
                <div className="recently__listed__assets__slider__item__bottom__detail__entry">
                  <div className="recently__listed__assets__slider__item__bottom__detail__entry__title">
                    Current Valuation
                  </div>
                  <div className="recently__listed__assets__slider__item__bottom__detail__entry__value">
                    AED 760,000
                  </div>
                </div>
                <div className="recently__listed__assets__slider__item__bottom__detail__entry">
                  <div className="recently__listed__assets__slider__item__bottom__detail__entry__title">
                    Total rent paid
                  </div>
                  <div className="recently__listed__assets__slider__item__bottom__detail__entry__value">
                    AED 0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
