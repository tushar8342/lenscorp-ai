import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Info from "@/components/Info/Info";
import OurVision from "@/components/OurVision/OurVision";
import About from "@/components/about/About";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <OurVision />
      <Info />
      <Footer />
    </>
  );
}
