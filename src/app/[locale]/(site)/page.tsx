import Banner from "@/components/sections/Home/Banner";

import Quality from "@/components/sections/Home/Quality";
import ShortBio from "@/components/sections/Home/ShortBio";
import Testimonials from "@/components/sections/Home/Testimonial";

export default function Home() {
  return (
    <main>
      <Banner />
      <ShortBio />
      <Quality />
      <Testimonials />
    </main>
  );
}
