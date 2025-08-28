import React from "react";
import Image from "next/image";
import heroImg from "../../../public/images/hero-1.png";

const BannerPlate = () => {
  return (
    <div className="absolute top-1/2 right-26 transform -translate-y-1/2">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <Image
          src={heroImg}
          alt="hero"
          className="custom-animation relative z-0"
        />
      </div>
    </div>
  );
};

export default BannerPlate;
