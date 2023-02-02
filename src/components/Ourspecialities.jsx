import React, { useEffect, useState } from "react";
import { Pagination, Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import OurSpecialistCards from "./OurSpecialistCards";
import "swiper/css/navigation";

export default function Ourspecialities() {
  const nextRef = React.useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(4.5);
  function changeSlidesPerView() {
    if (window.innerWidth < 768) {
      setSlidesPerView(1.2);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(2.5);
    } else if (window.innerWidth < 1300) {
      setSlidesPerView(3.5);
    } else {
      setSlidesPerView(4.5);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);
  return (
    <div className="homepage__our__specialities">
      <div className="homepage__our__specialities__container">
        <div className="homepage__our__specialities__container__title">
          Our Specialities
        </div>
        <div className="homepage__our__specialities__container__slider">
          <Swiper
            spaceBetween={30}
            style={{
              marginTop: "2em",
            }}
            modules={[Pagination, Navigation, FreeMode]}
            loop
            pagination={true}
            slidesPerView={slidesPerView}
            onInit={(swiper) => {
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide>
              <OurSpecialistCards
                image={
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.9284 12.2422H20.9375V26.8747H32.9011V23.9482H23.9284V12.2422Z"
                      fill="url(#paint0_linear_925_9194)"
                    />
                    <path
                      d="M47.8544 21.0207V9.31467L44.5644 12.5338C40.6763 5.21756 32.8999 0.535156 23.9272 0.535156C10.7672 0.535156 0 11.0706 0 23.9472C0 36.8238 10.7672 47.3592 23.9272 47.3592C31.1054 47.3592 37.6854 44.1401 41.8726 39.165L37.3863 35.3605C34.0963 39.165 29.3108 41.5062 23.9272 41.5062C14.0572 41.5062 5.9818 33.6046 5.9818 23.9472C5.9818 14.2897 14.0572 6.38816 23.9272 6.38816C31.1054 6.38816 37.3863 10.7779 40.3772 16.6309L35.8908 21.0207H47.8544Z"
                      fill="url(#paint1_linear_925_9194)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_925_9194"
                        x1="26.9193"
                        y1="12.2422"
                        x2="26.9193"
                        y2="26.8747"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_925_9194"
                        x1="23.9272"
                        y1="0.535156"
                        x2="23.9272"
                        y2="47.3592"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                title="Simple
                On-Boarding"
                info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
              />
            </SwiperSlide>
            <SwiperSlide>
              <OurSpecialistCards
                image={
                  <svg
                    width="80"
                    height="58"
                    viewBox="0 0 80 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M79.0012 47.9216C72.41 47.9216 65.8374 47.9216 59.1724 47.9216C58.9693 40.7145 55.8676 35.1488 50.0703 31.017C52.5812 25.772 56.6615 22.7345 62.311 21.8854C56.126 20.6968 52.8212 15.3387 53.4305 10.0937C54.0952 4.32046 58.6739 0.452762 64.4158 0.622563C69.3268 0.754631 73.7763 5.16946 74.1825 10.2824C74.6256 15.9613 70.9146 20.7723 65.0989 21.8477C65.505 21.9609 65.6897 22.0364 65.8927 22.0552C72.5023 22.9609 77.8934 28.3945 78.835 35.0922C78.8535 35.262 78.9458 35.4318 78.9827 35.6016C79.0012 39.7334 79.0012 43.8275 79.0012 47.9216Z"
                      fill="url(#paint0_linear_925_9190)"
                    />
                    <path
                      d="M54.5199 57.3509C44.4763 57.3509 34.4881 57.3509 24.5367 57.3509C24.4998 57.2755 24.4444 57.2377 24.4444 57.2C24.5183 53.2569 24.2598 49.276 24.7583 45.4083C25.4783 39.7105 28.8754 35.8051 34.0634 33.6354C35.3927 33.0694 36.8698 32.843 38.1252 32.5034C35.4112 32.0883 32.9741 30.7488 31.1833 28.3149C29.3924 25.8811 28.7278 23.1266 29.2262 20.1456C30.094 14.9384 34.7281 11.033 39.6761 11.2594C44.9564 11.5046 49.2396 15.4667 49.8489 20.4852C50.4951 25.7491 47.2273 31.5412 40.5992 32.5977C44.6056 32.9939 47.9473 34.6353 50.6428 37.6351C53.2461 40.5595 54.5015 44.031 54.5753 47.9553C54.6307 50.974 54.5938 53.9927 54.5938 57.0302C54.5753 57.0868 54.5384 57.2 54.5199 57.3509Z"
                      fill="url(#paint1_linear_925_9190)"
                    />
                    <path
                      d="M16.4686 21.9022C22.3213 22.7512 26.383 25.7699 28.9309 31.0148C23.189 35.1089 20.0504 40.6369 19.8288 47.8629C13.2377 47.8629 6.66502 47.8629 0.0369612 47.8629C0.0184986 47.6176 0 47.3535 0 47.1082C0 43.882 0 40.6369 0 37.4107C0.0184626 29.6187 5.55726 23.1474 13.1269 22.0531C13.3115 22.0342 13.4962 21.9588 13.81 21.8644C7.44043 20.6381 4.26484 15.2422 4.83718 10.0916C5.46491 4.56359 9.87749 0.601562 15.1947 0.601562C20.5119 0.601562 24.9429 4.58246 25.5522 10.0916C26.143 15.2611 22.9305 20.657 16.4686 21.9022Z"
                      fill="url(#paint2_linear_925_9190)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_925_9190"
                        x1="64.5357"
                        y1="0.617187"
                        x2="64.5357"
                        y2="47.9216"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_925_9190"
                        x1="39.5236"
                        y1="11.25"
                        x2="39.5236"
                        y2="57.3509"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_925_9190"
                        x1="14.4654"
                        y1="0.601562"
                        x2="14.4654"
                        y2="47.8629"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                title="Faster 
                Due Diligence"
                info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
              />
            </SwiperSlide>
            <SwiperSlide>
              <OurSpecialistCards
                image={
                  <svg
                    width="55"
                    height="55"
                    viewBox="0 0 55 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.9197 0.945312C19.9315 1.26467 20.9433 1.59468 21.9551 1.89275C26.9271 3.36182 31.8882 4.83088 36.8711 6.26801C37.2628 6.38511 37.3825 6.54479 37.3607 6.91738C37.3281 7.44965 37.3716 7.97127 37.3281 8.4929C37.3172 8.64193 37.1431 8.86548 37.0017 8.91871C35.8375 9.2913 34.6517 9.62131 33.3787 10.0045C33.5528 8.89742 32.813 8.65258 31.9862 8.42902C27.7431 7.26868 23.5109 6.06575 19.2678 4.9054C18.8871 4.79894 18.4084 4.80959 18.0276 4.93733C13.6431 6.44898 9.25858 7.99256 4.87408 9.5255C4.1125 9.79163 3.97107 10.0045 3.96019 10.8029C3.96019 13.2407 3.94931 15.6679 3.97107 18.1057C3.97107 18.4996 3.87315 18.6912 3.45973 18.8083C2.32824 19.1064 1.20764 19.4576 0.0108796 19.7983C0.0108796 19.5747 0.0108796 19.4044 0.0108796 19.2341C0.0108796 15.1356 0.0217593 11.0371 0 6.94931C0.0108796 6.53414 0.119676 6.37446 0.522223 6.25736C6.41899 4.54345 12.3049 2.79761 18.2016 1.06241C18.2996 1.04112 18.3975 0.987894 18.4845 0.945312C18.6368 0.945312 18.7783 0.945312 18.9197 0.945312Z"
                      fill="url(#paint0_linear_925_9128)"
                    />
                    <path
                      d="M55.0007 50.8517C53.706 50.8517 52.4004 50.8517 51.084 50.8517C51.084 45.71 51.084 40.6322 51.084 35.5117C52.4113 35.5117 53.706 35.5117 55.0007 35.5117C55.0007 40.6215 55.0007 45.7419 55.0007 50.8517Z"
                      fill="url(#paint1_linear_925_9128)"
                    />
                    <path
                      d="M54.9985 24.1626C54.3566 24.1306 53.7147 24.088 53.0293 24.0455C53.0293 23.46 53.0293 22.8958 53.0293 22.2145C53.6712 22.2038 54.3349 22.1825 54.9985 22.1719C54.9985 22.8319 54.9985 23.5025 54.9985 24.1626Z"
                      fill="url(#paint2_linear_925_9128)"
                    />
                    <path
                      d="M35.5361 54.7161C32.925 54.7161 30.3139 54.7268 27.7028 54.7161C26.3102 54.7055 25.4398 53.79 25.5704 52.5232C25.6574 51.6822 26.2667 51.0861 27.2567 50.8732C27.8986 50.7348 28.2468 50.3835 28.225 49.8725C28.2141 49.3615 27.8116 48.9889 27.235 48.957C26.8651 48.9357 26.4734 48.957 26.1144 48.8825C25.157 48.6802 24.5151 47.8712 24.5586 46.9557C24.6021 46.0082 25.3093 45.2418 26.2776 45.0927C26.3646 45.0821 26.4516 45.0821 26.5496 45.0714C27.1262 44.9969 27.507 44.603 27.4961 44.1027C27.4852 43.5811 27.0609 43.1978 26.4516 43.1765C26.1253 43.1659 25.8097 43.1765 25.4834 43.1659C24.4607 43.1233 23.6773 42.3888 23.5685 41.3775C23.4706 40.4726 24.1343 39.5997 25.1026 39.3761C25.2766 39.3336 25.4507 39.3229 25.6357 39.291C26.147 39.2058 26.5169 38.8439 26.4952 38.3755C26.4734 37.8858 26.2232 37.5345 25.7118 37.46C25.3419 37.4067 24.9611 37.4174 24.5912 37.4067C23.5033 37.3854 22.6655 36.6403 22.5894 35.6077C22.5132 34.6283 23.253 33.7554 24.3084 33.5957C24.5586 33.5531 24.8088 33.5531 25.059 33.5531C29.0301 33.5531 33.0012 33.5531 36.9723 33.5531C38.169 33.5531 38.5389 32.9995 38.082 31.9031C37.6359 30.796 37.1354 29.7101 36.7438 28.5924C36.5153 27.943 36.4065 27.2404 36.3304 26.5591C36.2651 25.8778 36.2977 25.1965 36.3195 24.5152C36.3521 23.078 37.4292 22.0454 38.8327 22.0667C40.2144 22.088 41.2262 23.1313 41.2371 24.5578C41.2371 24.5897 41.2371 24.6323 41.2371 24.6642C40.7584 27.6981 42.151 30.285 43.2933 32.925C43.4239 33.2337 43.8591 33.4999 44.2181 33.6276C45.6977 34.1493 47.1882 34.6283 48.6788 35.0967C48.9834 35.1925 49.0922 35.3202 49.0922 35.6396C49.0813 40.7494 49.0922 45.8592 49.0704 50.969C49.0704 51.1606 48.9072 51.4267 48.744 51.5438C47.2426 52.5551 45.7304 53.5452 44.1963 54.5139C43.9787 54.6523 43.6741 54.7268 43.4021 54.7374C40.8019 54.7268 38.169 54.7161 35.5361 54.7161Z"
                      fill="url(#paint3_linear_925_9128)"
                    />
                    <path
                      d="M7.22461 27.3551C15.3626 24.9705 23.3482 22.6179 31.508 20.2227C31.2904 21.6811 31.1598 23.033 30.8878 24.3531C30.3765 26.8228 29.4191 29.1222 28.1135 31.2939C27.9503 31.56 27.7763 31.6452 27.4825 31.6452C26.3619 31.6558 25.2304 31.6345 24.1098 31.7197C22.6302 31.8368 21.5857 32.6565 20.9982 33.9659C20.4216 35.254 20.5739 36.5208 21.4117 37.6917C21.4987 37.8195 21.6075 37.9472 21.7598 38.1389C20.7806 38.7669 19.8232 39.395 18.8549 39.9912C18.7679 40.0444 18.5503 39.9911 18.4306 39.9273C14.601 37.713 11.348 34.9027 9.12855 31.0597C8.43225 29.8887 7.86651 28.6432 7.22461 27.3551Z"
                      fill="url(#paint4_linear_925_9128)"
                    />
                    <path
                      d="M21.7043 40.4813C21.465 42.2697 22.0851 43.5791 23.5212 44.5478C22.8902 45.3462 22.5856 46.2404 22.6182 47.2305C22.6182 47.3476 22.4768 47.5073 22.368 47.5818C21.2365 48.2737 20.0941 48.9657 18.9409 49.6257C18.8103 49.7002 18.5601 49.7002 18.4187 49.6363C13.142 46.9111 8.85545 43.1001 5.59156 38.2138C3.79642 35.5205 2.42558 32.625 1.48993 29.5485C1.44641 29.4207 1.41377 29.2823 1.35938 29.0907C2.71933 28.6862 4.05753 28.2923 5.41748 27.8984C5.82003 28.782 6.16818 29.6336 6.5816 30.4533C8.69225 34.7221 11.8474 38.0754 15.9055 40.641C16.5365 41.0349 17.1893 41.4074 17.7985 41.8333C18.4295 42.2804 18.9844 42.2591 19.6045 41.8226C20.2356 41.3542 20.9319 40.9603 21.7043 40.4813Z"
                      fill="url(#paint5_linear_925_9128)"
                    />
                    <path
                      d="M5.94475 18.0221C5.93387 17.8731 5.92299 17.756 5.92299 17.6389C5.92299 15.6269 5.92299 13.615 5.91211 11.603C5.91211 11.2943 5.99915 11.1452 6.30378 11.0388C10.3184 9.64422 14.333 8.23903 18.3584 6.84448C18.576 6.76996 18.848 6.75932 19.0765 6.82319C23.0584 7.91967 27.0404 9.03743 31.0114 10.1552C31.1746 10.1978 31.3052 10.3468 31.4575 10.4426C31.3052 10.5278 31.1746 10.6449 31.0223 10.6981C22.8082 13.1146 14.5941 15.5311 6.36905 17.937C6.2385 17.9796 6.09706 17.9902 5.94475 18.0221Z"
                      fill="url(#paint6_linear_925_9128)"
                    />
                    <path
                      d="M31.4524 12.5781C31.4524 13.1423 31.4959 13.632 31.4306 14.1111C31.4089 14.2707 31.1586 14.4837 30.9628 14.5369C26.9047 15.7505 22.8357 16.9427 18.7667 18.135C14.6107 19.3486 10.4656 20.5728 6.30953 21.7864C6.24425 21.8077 6.17898 21.8183 6.1137 21.8396C6.08106 21.797 6.04842 21.7757 6.04842 21.7545C6.01578 21.2115 5.76555 20.5409 6.0049 20.1683C6.23337 19.817 6.96231 19.7425 7.48453 19.5934C15.2526 17.3047 23.0315 15.0266 30.7996 12.7378C30.9846 12.6846 31.1804 12.642 31.4524 12.5781Z"
                      fill="url(#paint7_linear_925_9128)"
                    />
                    <path
                      d="M31.4534 16.3906C31.4534 16.9868 31.486 17.519 31.4316 18.03C31.4208 18.1578 31.1705 18.3174 30.9965 18.3707C28.4071 19.1478 25.8069 19.9143 23.2175 20.6701C17.9082 22.2243 12.599 23.7785 7.27884 25.3328C7.10476 25.386 6.94157 25.4286 6.72397 25.4924C6.58254 24.9282 6.45198 24.396 6.31055 23.7785C14.6879 21.3194 23.0326 18.871 31.4534 16.3906Z"
                      fill="url(#paint8_linear_925_9128)"
                    />
                    <path
                      d="M35.8714 31.624C33.9348 31.624 32.0962 31.624 30.2031 31.624C30.2902 31.4324 30.3554 31.2834 30.4316 31.1343C31.8786 28.4836 32.7598 25.6626 33.1733 22.6925C33.2929 21.8409 33.3147 20.9893 33.3473 20.127C33.3582 19.765 33.5105 19.6267 33.8587 19.5308C34.9902 19.2221 36.1108 18.8815 37.3184 18.5195C37.3184 19.137 37.3293 19.7012 37.3075 20.2654C37.3075 20.3612 37.1335 20.4676 37.0138 20.5209C35.4689 21.2448 34.555 22.4477 34.4353 24.1084C34.3047 26.0778 34.2177 28.0578 35.1751 29.9101C35.4471 30.4424 35.6212 31.0066 35.8714 31.624Z"
                      fill="url(#paint9_linear_925_9128)"
                    />
                    <path
                      d="M48.0884 22.9823C47.4465 22.9823 46.8372 22.9823 46.1627 22.9823C46.0104 20.1719 44.5634 18.2238 41.8652 17.1592C42.1046 16.5631 42.3331 16.0095 42.5615 15.4453C45.4555 16.1905 48.2081 19.3948 48.0884 22.9823Z"
                      fill="url(#paint10_linear_925_9128)"
                    />
                    <path
                      d="M37.3415 14.6797C37.3415 15.2758 37.3524 15.7975 37.3307 16.3084C37.3307 16.4042 37.2001 16.5533 37.0913 16.5852C35.8837 16.9472 34.676 17.2985 33.4031 17.671C33.4031 17.0855 33.3922 16.5533 33.414 16.0104C33.414 15.9252 33.4901 15.7975 33.5663 15.7762C34.7957 15.4142 36.036 15.0523 37.3415 14.6797Z"
                      fill="url(#paint11_linear_925_9128)"
                    />
                    <path
                      d="M33.4795 13.8138C33.436 13.718 33.4143 13.7074 33.4143 13.6967C33.4143 13.1538 33.2184 12.4831 33.4795 12.1106C33.7298 11.7593 34.4369 11.6954 34.9483 11.5357C35.6446 11.3121 36.3409 11.1205 37.0372 10.9183C37.1024 10.897 37.1677 10.8863 37.3418 10.8438C37.3418 11.4186 37.3527 11.9615 37.3309 12.5151C37.3309 12.6002 37.2004 12.7173 37.1024 12.7493C35.8948 13.1006 34.6872 13.4519 33.4795 13.8138Z"
                      fill="url(#paint12_linear_925_9128)"
                    />
                    <path
                      d="M4.42923 24.332C4.57066 24.9388 4.70122 25.4604 4.85354 26.0566C3.54798 26.4398 2.2533 26.8231 0.893345 27.2276C0.773669 26.6421 0.653993 26.0779 0.523438 25.4817C1.82899 25.0985 3.10191 24.7259 4.42923 24.332Z"
                      fill="url(#paint13_linear_925_9128)"
                    />
                    <path
                      d="M3.99536 20.6172C4.04976 21.2559 4.09328 21.8308 4.1368 22.4269C2.84212 22.8101 1.59096 23.1721 0.263643 23.566C0.209245 22.9379 0.165726 22.363 0.111328 21.7562C1.40601 21.373 2.65717 21.0111 3.99536 20.6172Z"
                      fill="url(#paint14_linear_925_9128)"
                    />
                    <path
                      d="M50.7227 15.4768C51.2666 15.1362 51.7889 14.8062 52.3872 14.4336C52.7354 15.0297 53.0618 15.5939 53.4208 16.222C52.8115 16.5094 52.2349 16.7756 51.6365 17.063C51.3319 16.5307 51.049 16.0304 50.7227 15.4768Z"
                      fill="url(#paint15_linear_925_9128)"
                    />
                    <path
                      d="M42.474 7.39844C43.1811 7.62199 43.8013 7.82425 44.4758 8.03716C44.2256 8.65459 43.9971 9.22945 43.7469 9.83623C43.1594 9.65526 42.6045 9.47429 41.9844 9.28267C42.1476 8.66524 42.2999 8.0691 42.474 7.39844Z"
                      fill="url(#paint16_linear_925_9128)"
                    />
                    <path
                      d="M48.1312 10.0066C47.7178 10.5495 47.3587 11.0499 46.9671 11.5715C46.4557 11.2521 45.9444 10.9434 45.4004 10.6028C45.7159 10.0386 46.0205 9.49565 46.3469 8.91016C46.9453 9.2721 47.511 9.6234 48.1312 10.0066Z"
                      fill="url(#paint17_linear_925_9128)"
                    />
                    <path
                      d="M49.644 14.0288C49.2088 13.5711 48.8172 13.1666 48.3711 12.6982C48.8063 12.2404 49.2306 11.7933 49.7202 11.293C50.1989 11.7933 50.6667 12.2617 51.1672 12.7833C50.6558 13.2091 50.1662 13.603 49.644 14.0288Z"
                      fill="url(#paint18_linear_925_9128)"
                    />
                    <path
                      d="M54.7169 20.0972C54.0424 20.225 53.4331 20.3421 52.7912 20.4698C52.628 19.895 52.4757 19.3308 52.3125 18.7133C52.9435 18.5111 53.5419 18.3194 54.1947 18.1172C54.3688 18.7985 54.5319 19.4372 54.7169 20.0972Z"
                      fill="url(#paint19_linear_925_9128)"
                    />
                    <path
                      d="M52.3672 27.5924C52.5195 26.9856 52.6501 26.4427 52.8024 25.8359C53.4225 25.9424 54.0427 26.0595 54.7498 26.1766C54.5758 26.8579 54.4234 27.4966 54.2494 28.1673C53.5966 27.9757 53.0091 27.7947 52.3672 27.5924Z"
                      fill="url(#paint20_linear_925_9128)"
                    />
                    <path
                      d="M52.9193 31.1594C52.3101 30.8294 51.7661 30.5314 51.1895 30.2226C51.3635 29.8926 51.505 29.6052 51.6899 29.2539C52.2992 29.5307 52.8649 29.7862 53.4851 30.063C53.2892 30.4355 53.1152 30.7656 52.9193 31.1594Z"
                      fill="url(#paint21_linear_925_9128)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_925_9128"
                        x1="18.6816"
                        y1="0.945312"
                        x2="18.6816"
                        y2="19.7983"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_925_9128"
                        x1="53.0423"
                        y1="35.5117"
                        x2="53.0423"
                        y2="50.8517"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_925_9128"
                        x1="54.0139"
                        y1="22.1719"
                        x2="54.0139"
                        y2="24.1626"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_925_9128"
                        x1="35.8381"
                        y1="22.0664"
                        x2="35.8381"
                        y2="54.7374"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_925_9128"
                        x1="19.3663"
                        y1="20.2227"
                        x2="19.3663"
                        y2="40.0129"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_925_9128"
                        x1="12.4403"
                        y1="27.8984"
                        x2="12.4403"
                        y2="49.683"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint6_linear_925_9128"
                        x1="18.6848"
                        y1="6.78125"
                        x2="18.6848"
                        y2="18.0221"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint7_linear_925_9128"
                        x1="18.6845"
                        y1="12.5781"
                        x2="18.6845"
                        y2="21.8396"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint8_linear_925_9128"
                        x1="18.8868"
                        y1="16.3906"
                        x2="18.8868"
                        y2="25.4924"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint9_linear_925_9128"
                        x1="33.7621"
                        y1="18.5195"
                        x2="33.7621"
                        y2="31.624"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint10_linear_925_9128"
                        x1="44.9787"
                        y1="15.4453"
                        x2="44.9787"
                        y2="22.9823"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint11_linear_925_9128"
                        x1="35.3723"
                        y1="14.6797"
                        x2="35.3723"
                        y2="17.671"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint12_linear_925_9128"
                        x1="35.3441"
                        y1="10.8438"
                        x2="35.3441"
                        y2="13.8138"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint13_linear_925_9128"
                        x1="2.68849"
                        y1="24.332"
                        x2="2.68849"
                        y2="27.2276"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint14_linear_925_9128"
                        x1="2.12406"
                        y1="20.6172"
                        x2="2.12406"
                        y2="23.566"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint15_linear_925_9128"
                        x1="52.0717"
                        y1="14.4336"
                        x2="52.0717"
                        y2="17.063"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint16_linear_925_9128"
                        x1="43.2301"
                        y1="7.39844"
                        x2="43.2301"
                        y2="9.83623"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint17_linear_925_9128"
                        x1="46.7658"
                        y1="8.91016"
                        x2="46.7658"
                        y2="11.5715"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint18_linear_925_9128"
                        x1="49.7691"
                        y1="11.293"
                        x2="49.7691"
                        y2="14.0288"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint19_linear_925_9128"
                        x1="53.5147"
                        y1="18.1172"
                        x2="53.5147"
                        y2="20.4698"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint20_linear_925_9128"
                        x1="53.5585"
                        y1="25.8359"
                        x2="53.5585"
                        y2="28.1673"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint21_linear_925_9128"
                        x1="52.3373"
                        y1="29.2539"
                        x2="52.3373"
                        y2="31.1594"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                title="Quick Liquidity"
                info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
              />
            </SwiperSlide>
            <SwiperSlide>
              <OurSpecialistCards
                image={
                  <svg
                    width="61"
                    height="61"
                    viewBox="0 0 61 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M56.8202 56.3289H41.668V8.14453H56.8202V56.3289Z"
                      fill="url(#paint0_linear_925_9200)"
                    />
                    <path
                      d="M37.8807 56.3272H22.7285V22.9688H37.8807V56.3272Z"
                      fill="url(#paint1_linear_925_9200)"
                    />
                    <path
                      d="M18.9393 56.3288H3.78711V34.0898H18.9393V56.3288Z"
                      fill="url(#paint2_linear_925_9200)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_925_9200"
                        x1="49.2441"
                        y1="8.14453"
                        x2="49.2441"
                        y2="56.3289"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_925_9200"
                        x1="30.3046"
                        y1="22.9687"
                        x2="30.3046"
                        y2="56.3272"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_925_9200"
                        x1="11.3632"
                        y1="34.0898"
                        x2="11.3632"
                        y2="56.3288"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                title="Easy 
                Tokenization"
                info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
              />
            </SwiperSlide>
            <SwiperSlide>
              <OurSpecialistCards
                image={
                  <svg
                    width="49"
                    height="58"
                    viewBox="0 0 49 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 7.88128C0 3.932 3.27198 0.730469 7.30816 0.730469H40.9257C44.9618 0.730469 48.2339 3.932 48.2339 7.88128V48.6409C48.2339 49.8256 47.2522 50.7861 46.0414 50.7861H4.3849C4.3849 52.3659 5.6937 53.6464 7.30816 53.6464H46.0414C47.2522 53.6464 48.2339 54.6069 48.2339 55.7917C48.2339 56.9764 47.2522 57.9369 46.0414 57.9369H7.30816C3.27198 57.9369 0 54.7354 0 50.7861V7.88128ZM24.1169 17.8924C25.7314 17.8924 27.0402 16.6118 27.0402 15.0321C27.0402 13.4524 25.7314 12.1718 24.1169 12.1718C22.5024 12.1718 21.1937 13.4524 21.1937 15.0321C21.1937 16.6118 22.5024 17.8924 24.1169 17.8924ZM21.9245 22.898V37.1996C21.9245 38.3843 22.9061 39.3448 24.1169 39.3448C25.3277 39.3448 26.3094 38.3843 26.3094 37.1996V22.898C26.3094 21.7132 25.3277 20.7527 24.1169 20.7527C22.9061 20.7527 21.9245 21.7132 21.9245 22.898Z"
                      fill="url(#paint0_linear_925_9198)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_925_9198"
                        x1="24.1169"
                        y1="0.730469"
                        x2="24.1169"
                        y2="57.9369"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C80ECF" />
                        <stop offset="1" stop-color="#89008E" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                title="Reliable 
                Hands "
                info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
              />
            </SwiperSlide>
            <div className="homepage__our__specialities__container__slider__arrow">
              <button ref={nextRef}>
                <svg
                  width="65"
                  height="24"
                  viewBox="0 0 65 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64.0607 13.0607C64.6464 12.4749 64.6464 11.5251 64.0607 10.9393L54.5147 1.3934C53.9289 0.807611 52.9792 0.807611 52.3934 1.3934C51.8076 1.97919 51.8076 2.92893 52.3934 3.51472L60.8787 12L52.3934 20.4853C51.8076 21.0711 51.8076 22.0208 52.3934 22.6066C52.9792 23.1924 53.9289 23.1924 54.5147 22.6066L64.0607 13.0607ZM0 13.5H63V10.5H0V13.5Z"
                    fill="#currentColor"
                  />
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
