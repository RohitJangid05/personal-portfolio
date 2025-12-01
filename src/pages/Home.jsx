import { useRef, useState, useEffect } from "react";
import Typed from 'typed.js';

const Home = () => {

   useEffect(() => {
        const options = {
            strings: ["Web Developer", "Frontend Developer", "Full Stack Developer", "React.js Developer", "Javascript Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        };

        const typed = new Typed("#text-load", options);

        return () => {
            typed.destroy();
        };
    }, []);

  const baseRadius = "44% 56% 53% 47% / 32% 27% 73% 68%";

  let [borderRadius, setBorderRadius] = useState(
    "0% 0% 0% 0% / 0% 0% 0% 0%"
  );

  const imageDivRef = useRef(null);
  const pointerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBorderRadius(baseRadius);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    if (pointerRef.current) {
      pointerRef.current.classList.remove("hidden");
    }
  };

  const handleMove = (e) => {

    const rect = imageDivRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    pointerRef.current.style.transform = `translate(${x - 20}px, ${y - 20}px)`;

    let [leftPart, rightPart] = borderRadius.split("/");

    leftPart = leftPart.trim().split(" ").map(v => parseFloat(v));
    rightPart = rightPart.trim().split(" ").map(v => parseFloat(v));

    const influenceX = e.movementX * 0.15;
    const influenceY = e.movementY * 0.15;

    leftPart = leftPart.map((v, i) =>
      Math.max(0, Math.min(100, Math.round(v + (i % 2 === 0 ? influenceX : influenceY))))
    );

    const newBorderRadius = `
      ${leftPart.map(v => v + "%").join(" ")} /
      ${rightPart.map(v => v + "%").join(" ")}
    `.replace(/\s+/g, " ").trim();

    setBorderRadius(newBorderRadius);
  };

  const handleLeave = () => {
    setBorderRadius(baseRadius);
    pointerRef.current.classList.add("hidden");
  };

  return (
    <div className="w-full h-screen flex relative">
      <div className="w-1/2 h-full flex justify-center items-center">
        <div
          ref={imageDivRef}
          onMouseEnter={handleEnter}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="image-shape overflow-hidden w-[35vw] h-[75vh] transition-[border-radius] duration-500 ease-out relative cursor-crosshair"
          style={{ borderRadius }}
        >
          <div
            ref={pointerRef}
            className="w-10 h-10 absolute bg-[#ffa500] hidden rounded-full pointer-events-none mix-blend-difference transition-transform duration-75"
          ></div>

          <img
            className="w-full h-full object-cover"
            src="/images/image2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <>
          <h3 className="text-[2.5vw]">I'm</h3>
          <h1 className="text-[5vw] leading-[7vw]">Rohit Sampatlal Jangid</h1>
          <h2 className="text-[3vw]"><span id="text-load" className='ml-3 text-[#ffa500]'></span></h2>
        </>
        <div className="flex gap-5 mt-5 p-5">
          <a
            href="/RohitJangid.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="relative overflow-hidden text-2xl w-full cursor-pointer px-7 py-2 border-2 rounded-full text-center btn-hover">
            <span className="relative z-10">Resume</span>
          </a>
          <a
            className="relative overflow-hidden text-2xl w-full cursor-pointer px-7 py-2 border-2 rounded-full text-center btn-hover">
            <span className="relative z-10">Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
