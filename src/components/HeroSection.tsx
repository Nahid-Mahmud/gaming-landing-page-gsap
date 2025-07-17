import gsap from "gsap";
import heroNahidImage from "../assets/images/nahid.png";

import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin

const HeroSection = () => {
  useGSAP(() => {
    // Timeline for scroll animation
    // gsap.set(".hero-image", {
    //   opacity: 0,
    //   x: "-100%",
    //   scale: 1,
    // });
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".image-container",
    //     start: "top top",
    //     end: "200% top", // make scroll duration longer for smoother motion
    //     scrub: true,
    //     pin: true, // pin the section during scroll
    //   },
    // });
    // tl.to(".hero-image", {
    //   opacity: 1,
    //   x: "0%",
    //   duration: 2,
    //   scale: 0.7,
    //   ease: "power2.out",
    // })
    //   .to(".hero-image", {
    //     //   y: "-50%", // exit to right
    //     //   opacity: 0,
    //     rotate: 360,
    //     duration: 3,
    //     scale: 1,
    //     ease: "power2.inOut",
    //   })
    //   .to(".hero-image", {
    //     y: "-10%", // exit to right
    //     duration: 2,
    //     scale: 0.8,
    //     ease: "power2.inOut",
    //   });
    // same animation but without scrollTrigger

    gsap.set(".hero-image", {
      opacity: 0,
      x: "-100%",
      scale: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-container",
        start: "top top",
        end: "200% top",
        scrub: true,
        pin: true,
        anticipatePin: 1, // smooth pinning
      },
    });
    tl.to(".hero-image", {
      opacity: 1,
      x: "0%",
      duration: 1,
      scale: 0.7,
      ease: "power2.out",
    })
      .to(".hero-image", {
        rotate: 360,
        duration: 3,
        scale: 1,
        ease: "power2.inOut",
      })
      .to(".hero-image", {
        y: "-10%", // exit to right
        duration: 2,
        scale: 0.8,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <div
      // center the image in the middle of the screen
      className="flex justify-center items-center image-container h-screen"
    >
      <img
        src={heroNahidImage}
        //   remove background color of image with clip-path
        className="hero-image rounded-lg w-full max-w-4xl h-auto object-cover"
        alt="Nahid"
      />
    </div>
  );
};

export default HeroSection;
