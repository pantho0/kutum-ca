"use client";
import React, { useRef } from "react"; // 1. Import useRef
import { Star, Store, Soup } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const img1 = "/images/shortbio1.webp";
const img2 = "/images/shortbio2.webp";

const ShortBio = () => {
  const t = useTranslations("ShortBio");
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          end: "bottom 80%",
          // scrub: 1,
          toggleActions: "play pause resume reset",
        },
      });
      // Use viewport units for animation values to prevent overflow
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const moveDistance = Math.min(100, vw * 0.2); // Use 20% of viewport width or 100px, whichever is smaller
      
      tl.from(".bio-image-1", {
        opacity: 0,
        x: -moveDistance,
        delay: 0.3,
        ease: "power1.inOut",
      });
      tl.from(
        ".bio-image-2",
        {
          opacity: 0,
          x: moveDistance * 1.5, // Slightly more movement for the second image
          delay: 0.4,
          ease: "power1.inOut",
        },
        "<"
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="container mx-auto px-5 md:px-0 max-w-6xl grid grid-cols-1 items-center gap-12 py-3 text-white lg:grid-cols-2 lg:gap-20 lg:py-28 bio-animation overflow-x-hidden"
    >
      {/* Left Column: Image Composition */}
      <div className="relative h-[550px] w-full sm:h-[650px] lg:h-[600px]">
        {/* Image-1 */}
        <div className="absolute left-0 top-0 h-2/5 w-2/3 transform transition-transform duration-500 hover:scale-105 max-w-full">
          <Image
            src={img1}
            alt="A delicious gourmet burger with cheese and lettuce"
            width={400}
            height={300}
            className="h-full w-full rounded-lg object-cover shadow-lg bio-image-1" // The selector is still here
          />
        </div>

        {/* Image-2*/}
        <div className="absolute bottom-0 right-0 h-4/5 w-4/5 transform transition-transform duration-500 hover:scale-105 max-w-full">
          <Image
            src={img2}
            alt="A chef carefully preparing fresh lettuce on a wooden board"
            width={500}
            height={600}
            className="h-full w-full rounded-lg object-cover shadow-2xl bio-image-2"
          />
        </div>
      </div>

      {/* Right Column: Text Content */}
      <div className="mt-40 md:mt-0 flex flex-col justify-center space-y-7">
        <div className="flex items-center space-x-2 text-primary">
          <Star size={18} fill="currentColor" />
          <h3 className="text-sm font-sans uppercase md:text-2xl">
            {t("SectionTitle")}
          </h3>
          <Star size={18} fill="currentColor" />
        </div>

        <h2 className="text-4xl font-elsie font-bold text-primary leading-tight sm:text-5xl lg:text-6xl">
          {t("Title")}
        </h2>

        <p className="text-secondary md:text-lg font-sans">
          {t("Description")}
        </p>

        <div className="space-y-6 pt-4">
          {/* Feature 1: Quiet Environment */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 rounded-full border border-neutral-700 p-3">
              <Store className="text-primary size-20" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-3xl font-elsie text-primary font-bold">
                {t("point1")}
              </h4>
              <p className="mt-1 text-secondary text-lg">
                {t("point1Description")}
              </p>
            </div>
          </div>

          {/* Feature 2: Hygienic Food */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 rounded-full border border-neutral-700 p-3">
              <Soup className="text-primary size-20" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-3xl font-elsie text-primary font-bold">
                {t("point2")}
              </h4>
              <p className="mt-1 text-secondary text-lg">
                {t("point2Description")}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-2 flex justify-center md:justify-start">
          <Button className="bg-primary text-white px-8 py-8 text-base hover:bg-primary/80 hover:border-1  rounded-none hover:cursor-pointer">
            <Link href="/about">{t("ExploreUs")}s</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShortBio;
