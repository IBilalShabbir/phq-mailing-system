import React from "react";

export default function IndustrySolutionCardNew({ image, title, info, color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="industries__solutions__new__content__card"
    >
      {image}
      <div className="industries__solutions__new__content__card__heading">
        {title}
      </div>
      <div className="industries__solutions__new__content__card__info">
        {info}
      </div>
      <div className="industries__solutions__new__content__card__info__more__btn">
        <button>More</button>
      </div>
    </div>
  );
}
