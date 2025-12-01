import { useState, useRef } from "react";

const SkillBar = ({ name, value, color = "accent-[#ffa500]" }) => {
  const [sliderValue, setSliderValue] = useState(value);
  const animationRef = useRef(null);

  const handleChange = (e) => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    setSliderValue(Number(e.target.value));
  };

  const handleRelease = () => {
    const start = sliderValue;
    const end = value;
    const duration = 600;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      const newValue = Math.round(start + (end - start) * eased);
      setSliderValue(newValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <div className="flex py-3 gap-5 justify-center items-center w-full">
      <h1 className="text-[3vw]">{name}</h1>

      <input
        type="range"
        min={0}
        max={100}
        value={sliderValue}
        onChange={handleChange}
        onPointerUp={handleRelease}
        className={`w-1/2 cursor-pointer ${color}`}
      />

      <p className="text-2xl w-[60px]">{sliderValue}%</p>
    </div>
  );
};

export default SkillBar;
