import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Welcome from "./components/Welcome";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Welcome />
    </>
  );
}

export default App;
