import FooterComponents from "@/components/footer";
import HeroSection from "@/components/hero";
import { NavbarComponents } from "@/components/navbar";
import News from "@/components/news";
import { fetchNewsAPI } from "@/lib/fetchers/newsapi";

export default async function Home() {
  const data = await fetchNewsAPI(); 

  console.log(data);
  return (
    <>
      <NavbarComponents />
      <HeroSection />
      <News />
      <FooterComponents />
    </>
  );
}
