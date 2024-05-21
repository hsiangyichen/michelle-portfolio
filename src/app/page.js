import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import Navbar from "@/components/Navbar";
import Contact from "@/pages/Contact";
import Intro from "@/pages/Intro";
// import About from "./pages/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
