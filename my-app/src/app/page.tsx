import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skillstat from "@/components/sections/Skillstat";
import Blog from "@/components/sections/Blog";
import VisualSeparator from "@/components/ui/VisualSeparator";

export default function Home() {
  return (
    <>
      <Hero/>
      <VisualSeparator/>
      <Projects/>
      <VisualSeparator/>
      <Skillstat/>
      <VisualSeparator/>
      <Blog/>
    </>
  );
}