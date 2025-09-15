"use client";
import React, { useRef } from "react";
import { Star, User, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// GSAP Imports
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger globally once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Reservation = () => {
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

      tl.from(".reservation-header > *", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
      });

      tl.from(
        ".form-field",
        {
          opacity: 0,
          y: 40,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.15,
        },
        "-=0.3"
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="text-white py-20 md:py-32 bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(180deg, #0B1315 0%, rgba(11, 19, 21, 0.7) 49.35%, #0B1315 100%),
          url('/images/Reservation.png')
        `, // Replace with your background image path
      }}
    >
      <div className="container mx-auto max-w-5xl px-5 text-center">
        {/* Header */}
        <div className="mb-12 reservation-header">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Star size={16} fill="currentColor" />
            <h3 className="text-sm font-sans uppercase tracking-widest">
              RESERVATION
            </h3>
            <Star size={16} fill="currentColor" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-elsie font-medium">
            Book A Table
          </h1>
          <p className="text-neutral-300 mt-4 text-lg">
            You can Call Us directly at{" "}
            <a href="tel:+12345678899" className="text-primary hover:underline">
              +01 (234) 567 8899
            </a>
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Name Input */}
          <div className="relative form-field">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
            <Input
              type="text"
              placeholder="Name"
              className="pl-12 py-7 bg-transparent border-0 border-b border-neutral-600 rounded-none focus:ring-0 focus:border-primary placeholder:text-neutral-400 text-lg"
            />
          </div>

          {/* Email Input */}
          <div className="relative form-field">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
            <Input
              type="email"
              placeholder="Email Address"
              className="pl-12 py-7 bg-transparent border-0 border-b border-neutral-600 rounded-none focus:ring-0 focus:border-primary placeholder:text-neutral-400 text-lg"
            />
          </div>

          {/* Phone Input */}
          <div className="relative form-field">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
            <Input
              type="tel"
              placeholder="Phone Number"
              className="pl-12 py-7 bg-transparent border-0 border-b border-neutral-600 rounded-none focus:ring-0 focus:border-primary placeholder:text-neutral-400 text-lg"
            />
          </div>

          {/* Persons Select */}
          <div className="form-field">
            <Select>
              <SelectTrigger className="w-full py-7 bg-transparent border-0 border-b border-neutral-600 rounded-none focus:ring-0 focus:border-primary text-neutral-400 text-lg">
                <SelectValue placeholder="1 Person" />
              </SelectTrigger>
              <SelectContent className="bg-black border-neutral-700 text-white">
                <SelectItem value="1">1 Person</SelectItem>
                <SelectItem value="2">2 Persons</SelectItem>
                <SelectItem value="3">3 Persons</SelectItem>
                <SelectItem value="4">4 Persons</SelectItem>
                <SelectItem value="5+">5+ Persons</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date Input */}
          <div className="relative form-field">
            <Input
              type="text"
              placeholder="dd/mm/yy"
              className="py-7 bg-transparent border-0 border-b border-neutral-600 rounded-none focus:ring-0 focus:border-primary placeholder:text-neutral-400 text-lg text-center"
            />
          </div>

          {/* Time Select */}
          <div className="form-field">
            <Select>
              <SelectTrigger className="w-full py-7 bg-transparent border-0 border-b border-neutral-600 rounded-none focus:ring-0 focus:border-primary text-neutral-400 text-lg">
                <SelectValue placeholder="08:00 am" />
              </SelectTrigger>
              <SelectContent className="bg-black border-neutral-700 text-white">
                <SelectItem value="08:00">08:00 am</SelectItem>
                <SelectItem value="09:00">09:00 am</SelectItem>
                <SelectItem value="10:00">10:00 am</SelectItem>
                <SelectItem value="11:00">11:00 am</SelectItem>
                <SelectItem value="12:00">12:00 pm</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <div className="lg:col-span-3 flex justify-center form-field">
            <Button
              type="submit"
              className="bg-primary px-10 py-7 text-base text-black hover:bg-secondary hover:border hover:border-primary rounded-none hover:text-foreground w-full md:w-auto"
            >
              Book Now
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
