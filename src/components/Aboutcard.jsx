export default function Aboutcard({ icon, heading, text, number }) {
    return (
      <>
        <div className="about__section__card">
          <div className="about__section__card__upper">
            <div className="about__section__card__icon">{icon}</div>
            <div className="about__section__card__heading">{heading}</div>
            <div className="about__section__card__text">{text}</div>
          </div>
          <div className="about__section__card__bottom">
            <div className="about__section__card__more">More</div>
            <div className="about__section__card__number">{number}</div>
          </div>
        </div>
      </>
    );
  }
  