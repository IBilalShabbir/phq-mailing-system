import { Close } from "./Close";
import { Menu } from "./Menu";
import React from "react";
export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="nav__bar__wraper">
      <div className="header__nav__bar__container">
        <div className="nav__bar__logo">logo</div>
        <div className="nav__bar__container">
          <div className="nav__contant__link">Home</div>
          <div className="nav__contant__link">About</div>
          <div className="nav__contant__link">
            <div className="nav__contant__link__tag">Assets</div>
            <div className="nav__contant__link__icon">__</div>
          </div>
          <div className="nav__contant__link">
            <div className="nav__contant__link__tag">Services</div>
            <div className="nav__contant__link__icon">__</div>
          </div>
          <div className="nav__contant__link">Contact</div>
          <div className="nav__contant__link__btn">Get Started</div>
          <div className="nav__contant__link__language">
            <div className="nav__contant__link__language__tag">ENG</div>
            <div className="nav__contant__link__language__icon">__</div>
          </div>
        </div>
        <div className="nav__bar__btn__menu">
          <button
            className="nac__btn"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <Close size={24} color="#fff" />
            ) : (
              <Menu size={24} color="#fff" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
