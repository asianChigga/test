import React from "react";
import Lottie from "react-lottie";
import Dof from "../public/loveDog.json";
const index = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dof,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={400} />
    </div>
  );
};

export default index;
