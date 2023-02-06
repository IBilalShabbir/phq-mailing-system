import React from "react";
import { PngStartyour } from "../assets";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function RecentlyListedCard({
  heading,
  bottombtn,
  mainheading,
  budget,
  investers,
}) {
  return (
    <div className="recently__listed__assets__slider">
      <div className="recently__listed__assets__slider__item">
        <div className="recently__listed__assets__slider__item__heading">
          {heading}
        </div>
        <Swiper
          loop
          spaceBetween={0}
          modules={[Pagination, FreeMode]}
          pagination={{
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
          className="recently__listed__assets__slider__item__entry__slides"
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
          {bottombtn}
        </button>
        <div className="recently__listed__assets__slider__item__bottom__heading">
          {mainheading}
        </div>
        <div className="recently__listed__assets__slider__item__bottom__price">
          <div className="recently__listed__assets__slider__item__bottom__price__value">
            <span>AED </span>
            {budget}
          </div>
          <div className="recently__listed__assets__slider__item__bottom__price__investors">
            {investers}
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
  );
}
