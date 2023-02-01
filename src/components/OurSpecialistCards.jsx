import React from "react";

export default function OurSpecialistCards({ image, title, info }) {
  return (
    <div className="OurSpecialistCards__solutions__content__card">
      {image}
      <div className="OurSpecialistCards__solutions__content__card__heading heading">
        {title}
      </div>
      <div className="OurSpecialistCards__solutions__content__card__info">
        {info}
      </div>
    </div>
  );
}
