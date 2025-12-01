import { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import AnimatedStair from '../components/AnimatedStair'
import SkillBar from '../components/SkillBar'
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";


const About = () => {

  let imageContainerRef = useRef(null)
  let imageRef = useRef(null)
  let imageArray = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
  ];


  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to(imageContainerRef.current, {
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top 11.4%",
        end: "top -65%",
        pin: true,
        scrub: true,
        onUpdate: (e) => {
          let imageIndex;
          if (e.progress < 1) {
            imageIndex = Math.floor(e.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <>
      <AnimatedStair />
      <div className='p-5'>
        <div ref={imageContainerRef} className='absolute w-[20vw] h-[50vh] top-10 left-100 rounded-3xl overflow-hidden'>
          <img ref={imageRef} className='w-full h-full object-cover' src="/images/image1.jpg" alt="Animating images" />
        </div>
        <div className='relative'>
          <div className='mt-[40vh]'>
            <h1 className='text-[9vw] font-bold leading-[9vw] text-center uppercase'>Rohit sampatlal <br />Jangid</h1>
          </div>
          <div className='pl-[40%]'>
            <p className='text-[2vw]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I’m Rohit Jangid, a passionate MERN Stack Developer and BCA graduate (2024) with strong problem-solving skills and hands-on experience in building modern, interactive, and scalable web applications. I specialize in React.js, Tailwind CSS, Node.js, Express.js, MongoDB, and I enjoy creating projects that combine clean UI, performance, and intuitive user experience.</p>
          </div>
        </div>
      </div>
      <div className="w-full p-5 pt-[15vh]">
        <h1 className="w-full text-center text-[3.5vw]">
          Skills
        </h1>

        <div className="flex flex-col items-center gap-6  py-10 w-full">
          <SkillBar name={<FaHtml5 />} value={95} />
          <SkillBar name={<FaCss3Alt/>} value={93} />
          <SkillBar name={<RiJavascriptFill/>} value={85} />
          <SkillBar name={<FaReact/>} value={78} />
          <SkillBar name={<FaNodeJs/>} value={65} />
          <SkillBar name={<SiExpress/>} value={62} />
          <SkillBar name={<SiMongodb/>} value={60} />
        </div>
      </div>
      <div className="w-full p-5">
        <h1 className="w-full text-center text-[3.5vw]">
          Education
        </h1>
        <div className='w-full flex justify-center items-center'>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default About
