"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImg from "../../../../public/images/hero-1.png";

import { useLocale, useTranslations } from "next-intl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Banner = () => {
  const t = useTranslations("Homepage");
  const locale = useLocale();

  useGSAP(() => {
    // Initial fade in
    gsap.fromTo(
      ".custom-animation",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      }
    );

    // Continuous rotation
    gsap.to(".custom-animation", {
      rotation: 360,
      duration: 20,
      ease: "linear",
      repeat: -1,
      transformOrigin: "center",
    });
  }, []);

  return (
    <section className="w-full text-white min-h-dvh relative ">
      <div className="container mx-auto  min-h-screen max-w-6xl items-center px-4 py-12 lg:px-8 space-y-6">
        <div>
          <h2
            className={`font-elsie w-full md:w-[90%] z-50 ${
              locale === "fr"
                ? "md:text-7xl md:text-left text-center"
                : "md:text-8xl md:text-left text-center"
            }`}
          >
            {t("BannerTitle")}
          </h2>
        </div>
        <div className="flex items-center">
          <div className="mr-4 h-px w-26 bg-[#F5DEB3]"></div>
          <p className="text-lg font-sans font-light max-w-1/2">
            {t("BannerDescription")}
          </p>
        </div>
        <div className="hidden md:block absolute top-1/2 right-26 transform -translate-y-1/2">
          <Image src={heroImg} alt="hero" className="custom-animation" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
