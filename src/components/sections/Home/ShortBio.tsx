import React from "react";
import { Star, Store, Soup } from "lucide-react";

const Button = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <button
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`}
  >
    {children}
  </button>
);

// Mock Image component. In a real Next.js app, you would use `next/image`.
// This is a placeholder to make the component runnable in this environment.
const Image = ({
  src,
  alt,
  className,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
}) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={src}
    alt={alt}
    className={className}
    style={{ width: `${width}px`, height: `${height}px` }}
    loading="lazy"
  />
);

const ShortBio = () => {
  return (
    <section className="container mx-auto px-5 md:px-0 max-w-6xl grid grid-cols-1 items-center gap-12 py-3 text-white lg:grid-cols-2 lg:gap-20 lg:py-28">
      {/* Left Column: Image Composition */}
      <div className="relative h-[550px] w-full sm:h-[650px] lg:h-[600px]">
        {/* Burger Image */}
        <div className="absolute left-0 top-0 h-2/5 w-2/3 transform transition-transform duration-500 hover:scale-105">
          <Image
            src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800"
            alt="A delicious gourmet burger with cheese and lettuce"
            width={400}
            height={300}
            className="h-full w-full rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Chef Image */}
        <div className="absolute bottom-0 right-0 h-4/5 w-4/5 transform transition-transform duration-500 hover:scale-105">
          <Image
            src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800"
            alt="A chef carefully preparing fresh lettuce on a wooden board"
            width={500}
            height={600}
            className="h-full w-full rounded-lg object-cover shadow-2xl"
          />
        </div>
      </div>

      {/* Right Column: Text Content */}
      <div className="mt-40 md:mt-0 flex flex-col justify-center space-y-7">
        <div className="flex items-center space-x-2 text-primary">
          <Star size={18} fill="currentColor" />
          <h3 className="text-sm font-sans uppercase md:text-2xl">
            Our Restaurant
          </h3>
          <Star size={18} fill="currentColor" />
        </div>

        <h2 className="text-4xl font-elsie font-medium leading-tight sm:text-5xl lg:text-6xl">
          For Every Special Occasion There&apos;s Heritaste
        </h2>

        <p className="text-neutral-400 md:text-lg font-sans">
          Diam leo massa pellentesque a neque turpis cum mi gravida. Amet massa
          adipiscing mi dictum urna commodo. Fringilla ipsum etiam habitasse
          dolor lacus viverra. Leo ipsum libero at amet ipsum lacus, amet non
          leo nisi, turpis nec.
        </p>

        <div className="space-y-6 pt-4">
          {/* Feature 1: Quiet Environment */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 rounded-full border border-neutral-700 p-3">
              <Store className="text-white size-20" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-3xl font-elsie text-primary">
                Quiet Environment
              </h4>
              <p className="mt-1 text-neutral-400 text-lg">
                Objectively transition virtual functionalities via
                enterprise-wide benefits.
              </p>
            </div>
          </div>

          {/* Feature 2: Hygienic Food */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 rounded-full border border-neutral-700 p-3">
              <Soup className="text-white size-20" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-3xl font-elsie text-primary">
                Hygienic Food
              </h4>
              <p className="mt-1 text-neutral-400 text-lg">
                Objectively transition virtual functionalities via
                enterprise-wide benefits. Sagittis molestie nulla morbi
                ultrices.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-2 flex justify-center md:justify-start">
          <Button className="bg-primary px-8 py-5 text-base font-bold text-black hover:bg-secondary hover:border-1 hover:border-primary rounded-none hover:text-foreground hover:cursor-pointer">
            Explore Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShortBio;
