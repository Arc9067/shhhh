import React, { useEffect, useState } from "react";
import loadingImg from "./assets/loading.png";
import { gsap } from "gsap";
import Form from "./Components/Form";

const App = () => {
  const [loading, setLoading] = useState("true");
  useEffect(() => {
    const loadingTimeLine = gsap
      .timeline()
      .to(".loading-img", {
        scale: 2,
        repeat: 8,
        repeatDelay: 0,
        transformOrigin: "center",
        yoyo: true,
      })
      .to(".loading-img", {
        bottom: 0,
        scale: 1,
      })
      .to(".loading", {
        display: "none",
        ease: "back",
      });
  }, []);

  function Loading() {
    return (
      <div className=" min-h-screen loading w-full fixed bg-zinc-900 z-50 top-0 left-0 flex justify-center items-center">
        <img
          src={loadingImg}
          alt=""
          className="loading-img max-w-[8rem] rounded-full absolute"
        />
      </div>
    );
  }
  return (
    <section className="min-h-screen relative w-full bg-zinc-900 text-white font-primary ">
      <svg
        width="103"
        height="96"
        viewBox="0 0 103 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-2"
      >
        <g clip-path="url(#clip0_314_106)">
          <path
            d="M22.48 0H38.77L102.46 41.92L97.2 87.3L62.94 95.98L22.48 0Z"
            fill="#6033C6"
          />
          <path
            d="M22.48 0L79.58 49.21L62.94 95.98L0 21.87L22.48 0Z"
            fill="#3E1F93"
          />
          <path
            d="M79.5799 49.21L102.46 41.92L97.1999 87.3L62.9399 95.98L79.5799 49.21Z"
            fill="#8768DD"
          />
        </g>
        <defs>
          <clipPath id="clip0_314_106">
            <rect width="102.46" height="95.98" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        width="84"
        height="102"
        viewBox="0 0 84 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 bottom-0"
      >
        <g clip-path="url(#clip0_314_103)">
          <path d="M0 79.13L56.71 0L54.72 101.16L0 79.13Z" fill="#6033C6" />
          <path
            d="M56.7102 0L83.0702 64.13L54.7202 101.16L56.7102 0Z"
            fill="#8768DD"
          />
        </g>
        <defs>
          <clipPath id="clip0_314_103">
            <rect width="83.07" height="101.16" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        width="79"
        height="86"
        viewBox="0 0 79 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0"
      >
        <g clip-path="url(#clip0_314_110)">
          <path
            d="M66.34 6.35L48.56 0L0 28.14L10.89 78.52L34.04 85.33L66.34 6.35Z"
            fill="#F1C3FC"
          />
          <path
            d="M19.0601 30.86L66.3401 6.35L78.0601 64.51L34.0401 85.33L19.0601 30.86Z"
            fill="#E799F8"
          />
          <path
            d="M19.06 30.86L0 28.14L10.89 78.52L34.04 85.33L19.06 30.86Z"
            fill="#F2D4F9"
          />
        </g>
        <defs>
          <clipPath id="clip0_314_110">
            <rect width="78.06" height="85.33" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <Loading />
      <Form />
    </section>
  );
};

export default App;
