import { useEffect, useState } from "react";
import { X, Menu } from "react-feather";
import { PngLogo } from "../assets";
import Navlink from "./Navlink";

export default function Header() {
  const [checked, setIsChecked] = useState("Home");
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  function changeNav() {
    setIsNavOpen(window.innerWidth > 1000);
  }
  useEffect(() => {
    changeNav();
    window.addEventListener("resize", changeNav);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);
  const navLinks = [
    {
      label: "Home",
      scrollTo: "home",
      defaultChecked: true,
    },
    {
      label: "About",
      scrollTo: "about",
    },
    {
      label: "Assets",
      scrollTo: "assets",
    },
    {
      label: "Services",
      scrollTo: "services",
    },
    {
      label: "Contact Us",
      scrollTo: "contactus",
    },
  ];
  return (
    <>
      <div className={isScrolling ? "header header__active" : "header"}>
        <div className="header__content">
          <button
            onClick={() => {
              document.getElementById("home").checked = true;
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="header__content__logo"
          >
            <img src={PngLogo} alt="logo" />
          </button>

          {isNavOpen && (
            <div className="header__content__nav">
              {navLinks.map((link) => (
                <Navlink
                  key={link.label}
                  scrollTo={link.scrollTo}
                  label={link.label}
                  checked={checked}
                  setIsChecked={setIsChecked}
                  setIsNavOpen={setIsNavOpen}
                />
              ))}
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
              </select>
            </div>
          )}
          <div className="header__content__buttons">
            <button
              onClick={() => {
                setPopup(true);
              }}
              className="header__content__get__started"
            >
              Get Started
            </button>
            <button
              className="header__content__nav__menu"
              onClick={() => {
                setIsNavOpen(!isNavOpen);
              }}
            >
              {isNavOpen ? (
                <X size={20} color="currentColor" />
              ) : (
                <Menu size={20} color="currentColor" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
