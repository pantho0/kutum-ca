import Banner from "@/components/sections/Home/Banner";
import FirstVideo from "@/components/sections/Home/FirstVideo";
import Quality from "@/components/sections/Home/Quality";
import ShortBio from "@/components/sections/Home/ShortBio";
import Testimonials from "@/components/sections/Home/Testimonial";

export default function Home() {
  return (
    <main>
      <Banner />
      {/* <FirstVideo /> */}
      <ShortBio />
      <Quality />
      <Testimonials />
    </main>
  );
}
