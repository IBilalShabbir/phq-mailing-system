import { useEffect, useState } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PngProfileimg } from "../assets";
import TestinomialEntry from "./TestinomialEntry";

export default function Testinomials() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  function changeSlidesPerView() {
    if (window.innerWidth < 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 1100) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 1300) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(3);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);
  const testinomials = [
    {
      img: PngProfileimg,
      heading: "Nadeem Butt",
      subheading: "Chief Executive Officer",
      description:
        "An investment banker by profession having more than 30 years of extensive experience in project finance, business development and general management. Mr. Nadeem has been involved in various aspects of business development ......",
    },
    {
      img: PngProfileimg,
      heading: "Nadeem Butt",
      subheading: "Chief Executive Officer",
      description:
        "An investment banker by profession having more than 30 years of extensive experience in project finance, business development and general management. Mr. Nadeem has been involved in various aspects of business development ......",
    },
    {
      img: PngProfileimg,
      heading: "Nadeem Butt",
      subheading: "Chief Executive Officer",
      description:
        "An investment banker by profession having more than 30 years of extensive experience in project finance, business development and general management. Mr. Nadeem has been involved in various aspects of business development ......",
    },
    {
      img: PngProfileimg,
      heading: "Nadeem Butt",
      subheading: "Chief Executive Officer",
      description:
        "An investment banker by profession having more than 30 years of extensive experience in project finance, business development and general management. Mr. Nadeem has been involved in various aspects of business development ......",
    },
  ];
  return (
    <div className="testimonials__section">
      <div className="testinomials__section__heading">Testinomials</div>
      <div className="testimonials__container">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          style={{
            marginTop: "2em",
          }}
          modules={[FreeMode]}
          freeMode={true}
        >
          {testinomials.map((item) => {
            return (
              <SwiperSlide>
                <TestinomialEntry
                  heading={item.heading}
                  subheading={item.subheading}
                  description={item.description}
                  image={item.img}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
