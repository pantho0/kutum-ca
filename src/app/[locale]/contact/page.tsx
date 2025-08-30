"use client";
import React, { useRef } from "react";
import { User, Mail, Phone, Link as LinkIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// GSAP Imports
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import food from "../../../../public/images/food1.jpg";
import food2 from "../../../../public/images/sprinklesalt.webp";

// Register ScrollTrigger globally once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play pause resume reset",
        },
      });

      // Animate the header
      tl.from(".contact-header > *", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
      });

      // Animate the form fields
      tl.from(
        ".contact-form-field",
        {
          opacity: 0,
          y: 40,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.15,
        },
        "-=0.3"
      );

      // Animate the images
      tl.from(
        ".contact-image",
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        },
        "<0.3"
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="text-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Form */}
          <div className="flex flex-col">
            <div className="mb-10 contact-header">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-elsie font-medium mb-4">
                Got Any Questions?
              </h1>
              <p className="text-neutral-400 text-lg">
                Use the form below to get in touch with the support team.
              </p>
            </div>

            <form className="space-y-8">
              {/* Name Input */}
              <div className="relative contact-form-field">
                <Input
                  type="text"
                  placeholder="Name"
                  className="pl-4 pr-12 py-7 bg-transparent border-0 border-b border-neutral-600 rounded-none focus:ring-0 focus:border-primary placeholder:text-neutral-400 text-lg"
                />
                <User className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
              </div>

              {/* Email Input */}
              <div className="relative contact-form-field">
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="pl-4 pr-12 py-7 bg-transparent border-0 border-b border-neutral-600 rounded-none focus:ring-0 focus:border-primary placeholder:text-neutral-400 text-lg"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
              </div>

              {/* Phone Input */}
              <div className="relative contact-form-field">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="pl-4 pr-12 py-7 bg-transparent border-0 border-b border-neutral-600 rounded-none focus:ring-0 focus:border-primary placeholder:text-neutral-400 text-lg"
                />
                <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
              </div>

              {/* Message Textarea */}
              <div className="relative contact-form-field">
                <Textarea
                  placeholder="Message"
                  className="pl-4 pr-12 py-7 bg-transparent border-0 border-b border-neutral-600 rounded-none focus:ring-0 focus:border-primary placeholder:text-neutral-400 text-lg min-h-[120px]"
                />
                <LinkIcon className="absolute right-3 top-6 h-5 w-5 text-primary" />
              </div>

              {/* Submit Button */}
              <div className="pt-4 contact-form-field">
                <Button
                  type="submit"
                  className="bg-primary px-10 py-7 text-base text-black hover:bg-secondary hover:border hover:border-primary rounded-none hover:text-foreground w-full sm:w-auto"
                >
                  Send Your Message
                </Button>
              </div>
            </form>
          </div>

          {/* Right Column: Image Composition */}
          <div className="relative h-[450px] w-full sm:h-[600px] hidden lg:block">
            {/* Image 1: Restaurant Interior */}
            <div className="absolute top-0 left-0 h-4/5 w-4/5 transform transition-transform duration-500 hover:scale-105 contact-image">
              <Image
                src={food} // Replace with your image
                alt="Cozy restaurant interior"
                fill
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Image 2: Food with Salt */}
            <div className="absolute bottom-0 right-0 h-3/5 w-1/2 transform transition-transform duration-500 hover:scale-105 contact-image">
              <Image
                src={food2} // Replace with your image
                alt="Hand sprinkling salt over edamame"
                fill
                objectFit="cover"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
