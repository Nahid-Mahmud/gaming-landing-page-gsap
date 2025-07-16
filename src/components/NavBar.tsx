import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {
  useGSAP(() => {
    gsap.fromTo(".navbar-div", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  }, []);

  return (
    <div
      // fixed navbar at the top of the screen
      className=""
    >
      <div className="container mx-auto flex justify-between items-center p-4 navbar-div">
        <p className="text-4xl font-bold">
          N<span className="text-green">M</span>
        </p>
        <p className="text-5xl font-bold">=</p>
      </div>
    </div>
  );
};

export default NavBar;
