import React from "react";

export default function Navlink({
  label,
  scrollTo,
  checked,
  setIsChecked,
  setIsNavOpen,
}) {
  return (
    <div className="header__content__nav__link">
      <input
        type="radio"
        className="header__content__nav__link__input"
        name="header__content__nav__link"
        id={scrollTo}
        checked={checked === label}
        readOnly
        onClick={() => {
          document
            .getElementById(scrollTo + "__section")
            .scrollIntoView({ behavior: "smooth" });
          setIsChecked(label);
          if (window.innerWidth < 1000) {
            setIsNavOpen(false);
          }
        }}
      />
      <div className="header__content__nav__link__content">{label}</div>
    </div>
  );
}
