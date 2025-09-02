import React from "react";
import Image from "next/image";
import heroImg from "../../../public/images/hero-1.png";

const BannerPlate = () => {
  return (
    <div className="absolute top-1/2 right-0 -translate-y-1/2 2xl:-translate-y-1/2">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full  -z-10 animate-pulse" />
        <Image
          src={heroImg}
          alt="hero"
          width={512}
          height={512}
          sizes="(min-width: 1440px) 68rem,(min-width: 1280px) 24rem, (min-width: 1024px) 24rem, (min-width: 768px) 16rem, 16rem"
          className="custom-animation relative z-0 h-auto w-64 md:w-64 lg:w-96 xl:w-[28rem] 2xl:w-[32rem] 3xl:w-[36rem] select-none pointer-events-none"
        />
      </div>
    </div>
  );
};

export default BannerPlate;
