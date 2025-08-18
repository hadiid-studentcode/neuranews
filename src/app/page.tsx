import FooterComponents from "@/components/footer";
import HeroSection from "@/components/hero";
import { NavbarComponents } from "@/components/navbar";
import News from "@/components/news";

export default function Home() {
  return (
    <>
      <NavbarComponents />
      <HeroSection />
      <News />
      <FooterComponents />
    </>
  );
}
