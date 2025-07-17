import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import videoFile from "../assets/videos/output.mp4";
import gsap from "gsap";

const Welcome = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-container",
        start: "top top",
        end: "500% top",
        scrub: true,
        pin: true,
      },
    });

    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        videoTimeline.to(videoRef.current, {
          currentTime: videoRef.current?.duration || 0,
        });
      };
    }
  }, []);

  return (
    <div className="">
      <div className="video-container  flex items-center justify-center h-screen ">
        <video
          ref={videoRef}
          className="hero-video h-screen w-full object-center"
          src={videoFile}
          muted
          preload="auto"
          playsInline
        />
      </div>
    </div>
  );
};

export default Welcome;
