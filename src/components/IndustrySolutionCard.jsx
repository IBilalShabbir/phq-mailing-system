export default function IndustrySolutionCard({ image, title, info }) {
  return (
    <div className="industries__solutions__content__card">
      {image}
      <div className="industries__solutions__content__card__heading heading">
        {title}
      </div>
      <div className="industries__solutions__content__card__info">{info}</div>
      <div className="industries__solutions__content__card__info__more__btn">
        <button>More</button>
      </div>
    </div>
  );
}
