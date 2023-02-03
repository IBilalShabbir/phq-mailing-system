import { PngGetintouchbg } from "../assets";

export default function GetInTouch() {
  return (
    <div className="get__in__touch">
      <div className="get__in__touch__container">
        <img
          src={PngGetintouchbg}
          alt=""
          className="get__in__touch__container__img"
        />
        <div className="get__in__touch__svgs">
          <div className="get__in__touch__svg1">
            <svg
              width="340"
              height="373"
              viewBox="0 0 540 573"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M498.653 322.391L351.772 500.767L269.521 284.861L416.801 107.533L498.653 322.391Z"
                fill="url(#paint0_linear_925_9277)"
              />
              <path
                d="M187.419 72.4987L41.9851 251.523L270.319 286.957L416.801 107.533L187.419 72.4987Z"
                fill="url(#paint1_linear_925_9277)"
              />
              <path
                d="M124.485 464.934L351.771 500.767L270.319 286.957L41.9844 251.523L124.485 464.934Z"
                fill="#39003C"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_925_9277"
                  x1="322.997"
                  y1="143.268"
                  x2="445.576"
                  y2="465.031"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#8B0091" />
                  <stop offset="1" stop-color="#4A074D" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_925_9277"
                  x1="188.467"
                  y1="72.0994"
                  x2="270.319"
                  y2="286.957"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CA0BD1" />
                  <stop offset="1" stop-color="#6D0071" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="get__in__touch__svg2">
            <svg
              width="170"
              height="186"
              viewBox="0 0 270 286"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M249.23 160.557L175.937 249.565L134.894 141.83L208.387 53.3443L249.23 160.557Z"
                fill="url(#paint0_linear_925_9272)"
              />
              <path
                d="M93.926 35.8638L21.3555 125.196L135.293 142.877L208.386 53.346L93.926 35.8638Z"
                fill="url(#paint1_linear_925_9272)"
              />
              <path
                d="M62.5229 231.686L175.937 249.566L135.293 142.877L21.3555 125.195L62.5229 231.686Z"
                fill="#5B3B00"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_925_9272"
                  x1="161.579"
                  y1="71.176"
                  x2="222.745"
                  y2="231.734"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A86F05" />
                  <stop offset="1" stop-color="#674300" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_925_9272"
                  x1="94.449"
                  y1="35.6646"
                  x2="135.293"
                  y2="142.877"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FBAE1F" />
                  <stop offset="1" stop-color="#93630A" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="get__in__touch__container__overlay">
          <div className="get__in__touch__container__overlay__content__left">
            <div className="get__in__touch__container__overlay__content__heading__left">
              Get in Touch <span>with Us</span>
            </div>
            <div className="get__in__touch__container__overlay__content__left__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </div>
          </div>
          <div className="get__in__touch__container__overlay__content__right">
            <div className="get__in__touch__content__right__entry">
              <div className="get__in__touch__content__right__entry__input">
                <input
                  type="Name"
                  placeholder="Name"
                  autocomplete="nope"
                  className="get__in__touch__content__right__entry__input__field"
                />
              </div>
              <div className="get__in__touch__content__right__entry__input__error"></div>
            </div>
            <div className="get__in__touch__content__right__entry">
              <div className="get__in__touch__content__right__entry__input">
                <input
                  type="Email"
                  placeholder="Email"
                  autocomplete="nope"
                  className="get__in__touch__content__right__entry__input__field"
                />
              </div>
              <div className="get__in__touch__content__right__entry__input__error"></div>
            </div>
            <div className="get__in__touch__content__right__entry">
              <div className="get__in__touch__content__right__entry__input">
                <textarea
                  type="text"
                  placeholder="Subject"
                  className="get__in__touch__content__right__entry__input__textarea"
                />
              </div>
              <div className="get__in__touch__content__right__entry__input__error"></div>
            </div>
            <div className="get__in__touch__content__right__entry__btn">
              <button className="get__in__touch__content__right__entry__button">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
