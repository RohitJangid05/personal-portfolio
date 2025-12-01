import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { MyContext } from "../context/AppContext";


const AnimatedStair = () => {
  let { isDark } = useContext(MyContext)
  const animationRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        animationRef.current.style.display = "none";
      }
    });

    tl.from(".stairs", {
      height: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: {
        amount: -0.3
      }
    });

    tl.to(".stairs", {
      y: "100%",
      duration: 0.6,
      ease: "power2.in",
      stagger: {
        amount: -0.3
      }
    });
  }, [isDark]);

  return (
    <div
      ref={animationRef}
      className="w-screen h-screen flex fixed top-0 left-0 z-99"
    >
     {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`stairs w-1/5 h-full ${isDark ? "bg-white" : "bg-black"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default AnimatedStair;
