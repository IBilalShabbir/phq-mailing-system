export default function TestinomialEntry({
  img,
  heading,
  subheading,
  description,
}) {
  return (
    <div className="testimonials__container__entry">
      <div className="testimonials__container__entry__image">
        <img src={img} alt="profileimg" />
      </div>
      <div className="testimonials__container__entry__content">
        <div className="testimonials__container__entry__content__heading">
          {heading}
        </div>
        <div className="testimonials__container__entry__content__subheading">
          {subheading}
        </div>
        <div className="testimonials__container__entry__content__description">
          {description}
        </div>
      </div>
    </div>
  );
}
