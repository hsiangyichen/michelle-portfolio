import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import Navbar from "@/components/Navbar";
import Contact from "@/pages/Contact";
import Intro from "@/pages/Intro";
import SideItem from "@/components/SideItem";
import Skills from "@/pages/Skills";
// import About from "./pages/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <div className="flex flex-col mx-56 gap-32">
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
      <Contact />
      <SideItem />
    </>
  );
}
