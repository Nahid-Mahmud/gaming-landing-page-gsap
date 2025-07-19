import gsap from "gsap";
import { ScrollTrigger, SplitText, MotionPathPlugin } from "gsap/all";
import MotionPath from "./components/MotionPath";

gsap.registerPlugin(ScrollTrigger, SplitText, MotionPathPlugin);

function App() {
  return (
    <>
      {/* <NavBar />
      <HeroSection />
      <Welcome /> */}

      <MotionPath />
    </>
  );
}

export default App;
