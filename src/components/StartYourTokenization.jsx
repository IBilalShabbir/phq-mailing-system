import React from "react";
import { PngStartyour } from "../assets";

export default function StartYourTokenization() {
  return (
    <div className="homepage__startyour">
      <div className="homepage__startyour__container">
        <img
          src={PngStartyour}
          alt="startyour"
          className="homepage__startyour__container__img"
        />
        <div className="homepage__startyour__container__img__overlay">
          <div className="homepage__startyour__container__img__entry">
            Start your Tokenization
            <svg
              width="65"
              height="24"
              viewBox="0 0 65 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64.0607 13.0607C64.6464 12.4749 64.6464 11.5251 64.0607 10.9393L54.5147 1.3934C53.9289 0.807611 52.9792 0.807611 52.3934 1.3934C51.8076 1.97919 51.8076 2.92893 52.3934 3.51472L60.8787 12L52.3934 20.4853C51.8076 21.0711 51.8076 22.0208 52.3934 22.6066C52.9792 23.1924 53.9289 23.1924 54.5147 22.6066L64.0607 13.0607ZM0 13.5H63V10.5H0V13.5Z"
                fill="#F7EFEF"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
