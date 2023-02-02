import React, { useLayoutEffect } from "react";
import Close from "./Close";
import Menu from "./Menu";
import logo from "../assets/logo.png";
export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  function checkNavOpenClose() {
    if (window.innerWidth < 950) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useLayoutEffect(() => {
    checkNavOpenClose();
    window.addEventListener("resize", checkNavOpenClose);
    window.addEventListener("scroll", () => {
      checkNavOpenClose();
    });
  }, []);
  return (
    <div className="nav__bar__wraper">
      <div className="header__nav__bar__container">
        <div className="nav__bar__logo">
          <img src={logo} alt="logo" />
        </div>
        {isOpen ? (
          <div className="nav__bar__container">
            <div className="nav__contant__link">Home</div>
            <div className="nav__contant__link">About</div>
            <div className="nav__contant__link">
              <div className="nav__contant__link__tag">Assets</div>
              <div className="nav__contant__link__icon">
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.98875 3.49274L7.02334 0.183631C7.0764 0.125438 7.1395 0.0792544 7.209 0.0477394C7.27851 0.0162244 7.35305 7.71481e-09 7.42833 6.81706e-09C7.50362 5.91931e-09 7.57816 0.0162244 7.64766 0.0477394C7.71717 0.0792544 7.78027 0.125438 7.83333 0.183631C7.94012 0.301534 8 0.460525 8 0.626182C8 0.791839 7.94012 0.95083 7.83333 1.06873L4.39528 4.81789C4.29096 4.93126 4.15054 4.99644 4.00324 4.99986C3.85594 5.00328 3.7131 4.94468 3.60444 4.83626L0.143784 1.07166C0.0471296 0.952299 -0.00418567 0.797317 0.000267513 0.638213C0.00472117 0.479108 0.0646095 0.327822 0.16776 0.215106C0.27091 0.102391 0.409581 0.0367051 0.555584 0.0314014C0.701587 0.0260976 0.843963 0.0815737 0.953774 0.186553L3.98875 3.49274Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="nav__contant__link">
              <div className="nav__contant__link__tag">Services</div>
              <div className="nav__contant__link__icon">
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.98875 3.49274L7.02334 0.183631C7.0764 0.125438 7.1395 0.0792544 7.209 0.0477394C7.27851 0.0162244 7.35305 7.71481e-09 7.42833 6.81706e-09C7.50362 5.91931e-09 7.57816 0.0162244 7.64766 0.0477394C7.71717 0.0792544 7.78027 0.125438 7.83333 0.183631C7.94012 0.301534 8 0.460525 8 0.626182C8 0.791839 7.94012 0.95083 7.83333 1.06873L4.39528 4.81789C4.29096 4.93126 4.15054 4.99644 4.00324 4.99986C3.85594 5.00328 3.7131 4.94468 3.60444 4.83626L0.143784 1.07166C0.0471296 0.952299 -0.00418567 0.797317 0.000267513 0.638213C0.00472117 0.479108 0.0646095 0.327822 0.16776 0.215106C0.27091 0.102391 0.409581 0.0367051 0.555584 0.0314014C0.701587 0.0260976 0.843963 0.0815737 0.953774 0.186553L3.98875 3.49274Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="nav__contant__link">Contact</div>
            <div className="nav__contant__link__btn">Get Started</div>
            <div className="nav__contant__link__language">
              <div className="nav__contant__link__language__tag">ENG</div>
              <div className="nav__contant__link__language__icon">
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.98875 3.49274L7.02334 0.183631C7.0764 0.125438 7.1395 0.0792544 7.209 0.0477394C7.27851 0.0162244 7.35305 7.71481e-09 7.42833 6.81706e-09C7.50362 5.91931e-09 7.57816 0.0162244 7.64766 0.0477394C7.71717 0.0792544 7.78027 0.125438 7.83333 0.183631C7.94012 0.301534 8 0.460525 8 0.626182C8 0.791839 7.94012 0.95083 7.83333 1.06873L4.39528 4.81789C4.29096 4.93126 4.15054 4.99644 4.00324 4.99986C3.85594 5.00328 3.7131 4.94468 3.60444 4.83626L0.143784 1.07166C0.0471296 0.952299 -0.00418567 0.797317 0.000267513 0.638213C0.00472117 0.479108 0.0646095 0.327822 0.16776 0.215106C0.27091 0.102391 0.409581 0.0367051 0.555584 0.0314014C0.701587 0.0260976 0.843963 0.0815737 0.953774 0.186553L3.98875 3.49274Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        ) : null}
        <div className="nav__bar__btn__menu">
          <button
            className="nav__btn"
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
