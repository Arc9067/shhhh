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
      <div className=" min-h-screen loading w-full fixed bg-black z-50 top-0 left-0 flex justify-center items-center">
        <img
          src={loadingImg}
          alt=""
          className="loading-img max-w-[8rem] rounded-full absolute"
        />
      </div>
    );
  }
  return (
    <section className="min-h-screen w-full bg-black text-white font-primary ">
      <Loading />
      <Form />
    </section>
  );
};

export default App;
