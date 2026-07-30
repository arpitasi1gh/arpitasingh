import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/Navbar";
import Skillstat from "@/components/sections/Skillstat";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Skillstat/>
      <Projects/>
      <Blog/>
      <Footer/>
    </>
  );
}