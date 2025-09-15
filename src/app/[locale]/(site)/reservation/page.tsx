"use client";
import React, { useRef } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

// GSAP Imports
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomForm from "@/components/customform/CustomForm";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import CustomInput from "@/components/customform/CustomInput";
import CustomSelect from "@/components/customform/CustomSelect";
import { useCreateReservation } from "@/hooks/reservations.hook";
import { toast } from "sonner";

// Register ScrollTrigger globally once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Reservation = () => {
  const container = useRef(null);
  const { mutate: createReservation } = useCreateReservation();

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

  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    const toastId = toast.loading("Creating Reservation...");
    createReservation(data, {
      onSuccess: () => {
        toast.success("Reservation created successfully", { id: toastId });
      },
      onError: () => {
        toast.error("Failed to create reservation", { id: toastId });
      },
    });
  };

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
      <div className="container mx-auto max-w-5xl px-5 text-left">
        {/* Header */}
        <div className="mb-12 reservation-header">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Star size={16} fill="currentColor" />
            <h3 className="text-sm font-sans text-center uppercase tracking-widest">
              RESERVATION
            </h3>
            <Star size={16} fill="currentColor" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-elsie font-medium text-center">
            Book A Table
          </h1>
          <p className="text-neutral-300 mt-4 text-lg text-center">
            You can Call Us directly at{" "}
            <a href="tel:+12345678899" className="text-primary hover:underline">
              +01 (234) 567 8899
            </a>
          </p>
        </div>

        {/* Form */}

        <CustomForm onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Name Input */}
            <div>
              <CustomInput
                type="text"
                name="customerName"
                placeholder="Name"
                label="Name"
                fontColor="text-white"
              />
            </div>

            {/* Email Input */}
            <div>
              <CustomInput
                type="email"
                name="email"
                placeholder="Email Address"
                label="Email Address"
                fontColor="text-white"
              />
            </div>

            {/* Phone Input */}
            <div>
              <CustomInput
                type="tel"
                name="phone"
                placeholder="Phone Number"
                label="Phone Number"
                fontColor="text-white"
              />
            </div>

            {/* Persons Select */}
            <div className="text-white">
              <CustomSelect
                name="headCount"
                label="Persons"
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                  { value: "6", label: "6" },
                  { value: "7", label: "7" },
                  { value: "8", label: "8" },
                  { value: "9", label: "9" },
                  { value: "10", label: "10" },
                ]}
              />
            </div>

            {/* Date Input */}
            <div>
              <CustomInput
                type="date"
                name="date"
                placeholder="Date"
                label="Date"
                fontColor="text-white"
              />
            </div>

            {/* Time Select */}
            <div>
              <CustomInput
                type="time"
                name="time"
                placeholder="Time"
                label="Time"
                fontColor="text-white"
              />
            </div>

            {/* Submit Button */}
            <div className="lg:col-span-3 flex justify-center form-field">
              <Button
                type="submit"
                className="bg-primary px-10 py-7 text-base text-black hover:bg-primary/80 hover:border hover:border-primary rounded-none hover:text-white cursor-pointer w-full md:w-auto"
              >
                Book Now
              </Button>
            </div>
          </div>
        </CustomForm>
      </div>
    </section>
  );
};

export default Reservation;
