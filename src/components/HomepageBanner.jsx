import React from "react";
import { PngHeaderimg } from "../assets";

export default function HomepageBanner() {
  return (
    <>
      <div className="header__container">
        <img className="header__container__img" src={PngHeaderimg} alt=""></img>
        <div className="header__container__text__section">
          <div className="header__container__text__section__subheading">
            USING PHQ <span>BLOCKCHAIN</span>
          </div>
          <div className="header__container__text__section__heading">
            TOKENIZE ANY ASSET TANGIBLE OR <span>NON-TANGIBLE</span>
          </div>
          <div className="header__container__text__section__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <div className="header__container__text__section__get__started">
            <button className="header__container__text__section__get__started__btn">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
