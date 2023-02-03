import React from "react";

export default function HomepageBanner() {
  return (
    <>
      <div className="header__container">
        <div className="header__container__svgs">
          <div className="header__container__svgs__one">
            <svg
              width="600"
              height="609"
              viewBox="0 0 898 909"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M829.314 492.05L584.613 789.22L447.584 429.525L692.95 134.101L829.314 492.05Z"
                fill="url(#paint0_linear_2_65)"
              />
              <path
                d="M310.804 75.7339L68.5145 373.985L448.914 433.017L692.95 134.101L310.804 75.7339Z"
                fill="url(#paint1_linear_2_65)"
              />
              <path
                d="M205.959 729.523L584.613 789.22L448.914 433.018L68.5146 373.985L205.959 729.523Z"
                fill="#39003C"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2_65"
                  x1="536.675"
                  y1="193.635"
                  x2="740.888"
                  y2="729.685"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#8B0091" />
                  <stop offset="1" stop-color="#4A074D" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2_65"
                  x1="312.55"
                  y1="75.0687"
                  x2="448.914"
                  y2="433.017"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CA0BD1" />
                  <stop offset="1" stop-color="#6D0071" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="header__container__svgs__two">
            <svg
              width="270"
              height="287"
              viewBox="0 0 270 287"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M248.936 161.663L175.484 250.865L134.351 142.895L208.003 54.2169L248.936 161.663Z"
                fill="url(#paint0_linear_2_43)"
              />
              <path
                d="M93.2945 36.6969L20.5661 126.223L134.751 143.943L208.004 54.217L93.2945 36.6969Z"
                fill="url(#paint1_linear_2_43)"
              />
              <path
                d="M61.8234 232.945L175.484 250.865L134.751 143.943L20.5664 126.223L61.8234 232.945Z"
                fill="#5B3B00"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2_43"
                  x1="161.094"
                  y1="72.0875"
                  x2="222.393"
                  y2="232.994"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A86F05" />
                  <stop offset="1" stop-color="#674300" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2_43"
                  x1="93.8186"
                  y1="36.4972"
                  x2="134.751"
                  y2="143.943"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FBAE1F" />
                  <stop offset="1" stop-color="#93630A" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="header__container__svgs__three">
            <svg
              width="300"
              height="315"
              viewBox="0 0 362 385"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M333.966 216.624L235.424 336.294L180.243 191.445L279.052 72.4776L333.966 216.624Z"
                fill="#038686"
              />
              <path
                d="M125.162 48.973L27.5918 169.079L180.779 192.851L279.053 72.4775L125.162 48.973Z"
                fill="url(#paint0_linear_2_57)"
              />
              <path
                d="M82.94 312.254L235.424 336.295L180.778 192.851L27.5908 169.079L82.94 312.254Z"
                fill="#014141"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2_57"
                  x1="125.865"
                  y1="48.7051"
                  x2="180.779"
                  y2="192.851"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#16E1E1" />
                  <stop offset="1" stop-color="#016363" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="header__container__text__section">
          <div className="header__container__text__section__subheading">
            USING PHQ <span>BLOCKCHAIN</span>
          </div>
          <div className="header__container__text__section__heading">
            TOKENIZE ANY ASSET TANGIBLE OR <span>NON-TANGIBLE</span>
          </div>
          <div className="header__container__text__section__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <div className="header__container__text__section__get__started">
            <button className="header__container__text__section__get__started__btn">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
