"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FirstVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.set(".first-vdo-wrapper", { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vdo-wrapper",
        start: "top top",
        end: "+=200% top",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".first-vdo-wrapper", {
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<"
      );
    };
  }, []);

  return (
    <section className="first-vdo-wrapper">
      <video
        ref={videoRef}
        src="/videos/first-video.mp4"
        muted
        loop
        playsInline
        preload="auto"
        className="first-vdo"
      />
    </section>
  );
};

export default FirstVideo;
