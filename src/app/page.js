import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import Navbar from "@/components/Navbar";
import Contact from "@/pages/Contact";
import Intro from "@/pages/Intro";
import SideItem from "@/components/SideItem";
// import About from "./pages/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <div className="mx-56">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <SideItem />
    </>
  );
}
