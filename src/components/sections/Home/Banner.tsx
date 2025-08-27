"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImg from "../../../../public/images/hero-1.png";

const Banner = () => {
  return (
    <section className="w-full text-white ">
      <div className="container relative mx-auto  min-h-screen max-w-6xl items-center px-4 py-12 lg:flex-row lg:justify-between lg:px-8 space-y-6">
        <div>
          <h2 className="text-9xl font-elsie">Perfectly Light In Every Bite</h2>
        </div>
        <div className="flex items-center">
          <div className="mr-4 h-px w-16 bg-[#F5DEB3]"></div>
          <p className="text-lg font-sans font-light max-w-1/2">
            We have a proper passion for cooking. Love is the secret ingredient
            that makes all our meals taste better and magical.
          </p>
          <div className="absolute bottom-0 right-10">
            <Image src={heroImg} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
