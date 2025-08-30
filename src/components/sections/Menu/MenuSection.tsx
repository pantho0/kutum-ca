"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Star,
  Utensils,
  Coffee,
  Salad,
  Soup,
  CakeSlice,
  GlassWater,
} from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// GSAP Imports
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger globally once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Menu Data ---
// You can easily add, remove, or edit items here.
const menuItems = [
  // Breakfast
  {
    name: "Classic Pancakes",
    description:
      "Fluffy buttermilk pancakes served with maple syrup and fresh berries.",
    price: 14,
    image: "/images/classicpancake.webp",
    category: "Breakfast",
  },
  {
    name: "Avocado Toast",
    description:
      "Sourdough toast with mashed avocado, cherry tomatoes, and a sprinkle of chili flakes.",
    price: 12,
    image: "/images/avocadotoast.webp",
    category: "Breakfast",
  },
  // Lunch
  {
    name: "Finger Chicken",
    description:
      "Virgin olive oil, touch of garlic, prawns, green peas, sun dried tomato, and Italian herbs.",
    price: 18,
    image: "/images/fingerchicken.webp",
    category: "Lunch",
  },
  {
    name: "Gourmet Burger",
    description:
      "Angus beef patty with cheddar cheese, lettuce, tomato, and our special sauce.",
    price: 22,
    image: "/images/gourmetburger.webp",
    category: "Lunch",
  },
  // Dinner
  {
    name: "Grilled Salmon",
    description:
      "Perfectly grilled salmon fillet served with asparagus and lemon butter sauce.",
    price: 28,
    image: "/images/grilledsalmon.webp",
    category: "Dinner",
  },
  {
    name: "Ribeye Steak",
    description:
      "12oz Ribeye steak cooked to perfection, served with mashed potatoes and gravy.",
    price: 35,
    image: "/images/ribeyesteak.webp",
    category: "Dinner",
  },
  // Dessert
  {
    name: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with a molten center, served with vanilla ice cream.",
    price: 12,
    image: "/images/chocolatelavacake.webp",
    category: "Dessert",
  },
  // Drink
  {
    name: "Orange Juice",
    description:
      "Freshly squeezed oranges, served chilled with a slice of orange.",
    price: 10,
    image: "/images/orangejuice.webp",
    category: "Drink",
  },
];

const menuTabs = [
  {
    value: "All",
    label: "All",
    icon: <Utensils className="h-8 w-8 size-40" />,
  },
  {
    value: "Breakfast",
    label: "Breakfast",
    icon: <Coffee className="h-8 w-8 size-40" />,
  },
  {
    value: "Lunch",
    label: "Lunch",
    icon: <Salad className="h-8 w-8 size-40" />,
  },
  {
    value: "Dinner",
    label: "Dinner",
    icon: <Soup className="h-8 w-8 size-40" />,
  },
  {
    value: "Dessert",
    label: "Dessert",
    icon: <CakeSlice className="h-8 w-8 size-40" />,
  },
  {
    value: "Drink",
    label: "Drink",
    icon: <GlassWater className="h-8 w-8 size-40" />,
  },
];

const MenuSection = () => {
  const container = useRef(null);
  const menuGridRef = useRef(null);
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeTab);

  // GSAP animation for tab changes
  useEffect(() => {
    if (menuGridRef.current) {
      gsap.fromTo(
        menuGridRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [activeTab]);

  useGSAP(
    () => {
      // Entrance animation for the whole section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play pause resume reset",
        },
      });

      tl.from(".menu-header > *", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
      });

      tl.from(
        ".menu-tabs-list",
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="text-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="text-center mb-12 menu-header">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Star size={16} fill="currentColor" />
            <h3 className="text-sm font-sans uppercase tracking-widest">
              OUR MENU
            </h3>
            <Star size={16} fill="currentColor" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-elsie font-medium mb-4">
            Tasty With Good Price
          </h1>
          <p className="max-w-3xl mx-auto text-neutral-400 leading-relaxed">
            Diam leo massa pellentesque a neque turpis cum mi gravida. Amet
            massa adipiscing mi dictum urna commodo. Fringilla ipsum etiam
            habitasse dolor lacus viverra.
          </p>
        </div>

        {/* Shadcn Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 h-auto bg-transparent p-0 mb-12 menu-tabs-list">
            {menuTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex flex-col items-center cursor-pointer justify-center gap-2 h-28 text-neutral-400 data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-colors duration-300"
              >
                {tab.icon}
                <span className="text-lg font-medium">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab}>
            <div
              ref={menuGridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex items-center gap-6"
                >
                  <div className="flex-shrink-0 w-28 h-28">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-elsie text-white">
                      {item.name}
                    </h3>
                    <p className="text-neutral-400 my-2">{item.description}</p>
                    <p className="text-xl font-bold text-primary">
                      ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
