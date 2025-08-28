"use client";
import React from "react";
import { Soup, Star, Store } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Exceptional = () => {
  return (
    <section className="text-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="flex flex-col space-y-10">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-primary">
                <Star size={16} fill="currentColor" />
                <h3 className="text-xl font-sans uppercase tracking-widest">
                  OUR RESTAURANT
                </h3>
                <Star size={16} fill="currentColor" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-elsie font-medium leading-tight">
                The Perfect Place For An Exceptional Experience
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
              <div className="flex gap-8">
                <div className="flex-shrink-0 border-neutral-700 p-3">
                  <Store className="text-white size-20" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-elsie text-primary">
                    Quiet Environment
                  </h4>
                  <p className="text-neutral-400 leading-relaxed text-lg">
                    Objectively transition virtual functionalities via
                    enterprise-wide benefits.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/burger-and-fries.webp" // Replace with your image path
                alt="Delicious burger and fries on a table"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-10">
            <p className="text-neutral-400 leading-relaxed text-lg">
              Elementum, interdum arcu pulvinar vitae aenean arcu rutrum locus.
              Cursus phasellus tempus nunc netus. Non, viverra quisque commodo
              porttitor imperdiet pretium, congue.
              <br />
              <br />
              Tempor felis eget quisque ultrices aliquam dolor id vel. Diam
              facilisi vitae suspendisse dolor at congue amet. Lorem convallis
              erat a, accumsan id nam curabitur turpis magna. Sagittis, posuere
              rhoncus diam facilisi consectetur suspendisse elementum ipsum
              nisi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
              <div className="flex gap-8">
                <div className="flex-shrink-0 border-neutral-700 p-3">
                  <Soup className="text-white size-20" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-elsie text-primary">
                    Hygienic Food
                  </h4>
                  <p className="text-neutral-400 leading-relaxed text-lg">
                    Objectively transition virtual functionalities via
                    enterprise-wide benefits. Sagittis molestie nulla morbi
                    ultrices.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/friends-dining.webp" // Replace with your image path
                alt="Friends enjoying a meal at the restaurant"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="flex justify-start">
              <Button className="bg-primary px-8 py-7 text-base text-black hover:bg-secondary hover:border hover:border-primary rounded-none hover:text-foreground">
                Explore Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exceptional;
