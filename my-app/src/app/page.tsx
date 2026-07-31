import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/Navbar";
import Skillstat from "@/components/sections/Skillstat";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skillstat/>
      <Footer/>
    </>
  );
}