import React from "react";

export default function ({ icon, heading, subheading }) {
  return (
    <>
      <div className="tokenization__section__blue__cards__card">
        <div className="tokenization__section__blue__cards__card__icon">
          {icon}
        </div>
        <div className="tokenization__section__blue__cards__card__text">
          <div className="tokenization__section__blue__cards__card__text__heading">
            {heading}
          </div>
          <div className="tokenization__section__blue__cards__card__text__subheading">
            {subheading}
          </div>
          <div className="tokenization__section__blue__cards__card__text__more">
            More
          </div>
        </div>
      </div>
    </>
  );
}
