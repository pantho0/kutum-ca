"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImg from "../../../../public/images/hero-1.png";

import { useLocale, useTranslations } from "next-intl";

const Banner = () => {
  const t = useTranslations("Homepage");
  const locale = useLocale();
  return (
    <section className="w-full text-white min-h-dvh relative ">
      <div className="container mx-auto  min-h-screen max-w-6xl items-center px-4 py-12 lg:px-8 space-y-6">
        <div>
          <h2
            className={`font-elsie w-[90%] z-50 ${
              locale === "fr" ? "text-7xl" : "text-8xl"
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
        <div className="absolute top-1/2 right-26 transform -translate-y-1/2">
          <Image src={heroImg} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
