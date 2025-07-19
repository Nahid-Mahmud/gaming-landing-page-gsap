import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const MotionPath = () => {
  useGSAP(() => {
    gsap.set("#svg-stage", {
      transformOrigin: "center center",
      opacity: 0,
      scale: 0.5,
      rotation: 0,
    });

    gsap.to("#svg-stage", {
      opacity: 1,
      scale: 1,
      duration: 3,
      ease: "power2.inOut",
      rotation: 360,
    });

    gsap.to("circle", {
      motionPath: ".motion-path",
      duration: 5,
      ease: "none",
      delay: 0.5,
      transformOrigin: "center center",
      onComplete: () => {
        gsap.set("#svg-stage", {
          transformOrigin: "center center",
          rotation: 0,
          scale: 1,
          opacity: 1,
        });

        gsap.to("#svg-stage", {
          rotation: 360,
          scale: 0.5,
          duration: 2,
          transformOrigin: "center center",
          opacity: 0,
        });
      },
    });
  }, []);
  return (
    <div>
      <div className="container h-screen flex items-center justify-center mx-auto overflow-auto">
        <svg
          className="max-w-2xl mx-auto"
          id="svg-stage"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-4 -4 110 110"
          fill="none"
        >
          <defs>
            <linearGradient id="grad-1" x1="-4" y1="-4" x2="9" y2="9" gradientUnits="userSpaceOnUse">
              <stop offset="0.2" stop-color="rgb(255, 15, 9)" />
              <stop offset="0.5" stop-color="rgb(247, 89, 248)" />
            </linearGradient>
          </defs>
          <path
            className="motion-path"
            stroke="rgb(250,225,25)"
            d="M50.5 50.5h50v50s-19.2 1.3-37.2-16.7S56 35.4 35.5 15.5C18.5-1 .5.5.5.5v50h50s25.6-.6 38-18 12-32 12-32h-50v100H.5S.2 80.7 11.8 68.2 40 49.7 50.5 50.5Z"
          />
          <circle fill="url(#grad-1)" cx="1" cy="1" r="4" />
          {/* triangle */}
        </svg>
      </div>
    </div>
  );
};

export default MotionPath;
