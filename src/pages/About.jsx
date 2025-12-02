import { useRef, useState } from 'react'
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
  gsap.registerPlugin(ScrollTrigger)

  let [eduLoader, setEduLoader] = useState(0)

  let imageContainerRef = useRef(null)
  let imageRef = useRef(null)
  let eduRef = useRef(null)
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

  useGSAP(() => {
    gsap.to(eduRef.current, {
      scrollTrigger: {
        trigger: eduRef.current,
        // markers:true,
        start: "top 80%",
        end: "top -40%",
        onUpdate: (e) => {
          setEduLoader(Math.floor(e.progress * 100))
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
          <SkillBar name={<FaCss3Alt />} value={93} />
          <SkillBar name={<RiJavascriptFill />} value={85} />
          <SkillBar name={<FaReact />} value={78} />
          <SkillBar name={<FaNodeJs />} value={65} />
          <SkillBar name={<SiExpress />} value={62} />
          <SkillBar name={<SiMongodb />} value={60} />
        </div>
      </div>
      <div className="w-full p-5">
        <h1 className="w-full text-center text-[3.5vw] capitalize">
          My Journey from school to IT
        </h1>
        <div ref={eduRef} className='w-full h-screen flex justify-center items-center px-20'>
          <div className='h-full py-5'>
            <div className='w-1/2 px-10'>
              <div className='flex gap-5'>
                <h1 className='text-[1.2vw]'>Secondary School Leaving Certificate (10th)</h1>
                <h1 className='text-[1.2vw]'>~</h1>
                <h1 className='text-[1.2vw]'>2019</h1>
              </div>
              <p className='py-2'>Seventh-Day English Medium High School, Belagavi</p>
              <p>Successfully completed SSLC with a strong academic foundation, securing First Class. Built core competencies in mathematics, science, and languages, forming the base for higher studies in computer science.</p>
            </div>
            <div className='w-full  pl-8 flex justify-end'>
              <div className='w-1/2 px-10'>
                <div className='flex gap-5'>
                  <h1 className='text-[1.2vw]'>Pre-University Course (12th)</h1>
                  <h1 className='text-[1.2vw]'>~</h1>
                  <h1 className='text-[1.2vw]'>2021</h1>
                </div>
                <p className='py-2'>Jain Pu College, Belagavi</p>
                <p>Achieved Distinction in PUC with excellent performance. Developed strong analytical and problem-solving skills that helped transition into the world of programming and computer applications.</p>
              </div>
            </div>
            <div className='w-1/2 px-10'>
              <div className='flex gap-5'>
                <h1 className='text-[1.2vw]'>Bachelor of Computer Application - 8.2 CGPA</h1>
                <h1 className='text-[1.2vw]'>~</h1>
                <h1 className='text-[1.2vw]'>2024</h1>
              </div>
              <p className='py-2'>Rani Channama University, Belagavi</p>
              <p>Graduated with a solid understanding of programming, web development, data structures, and database systems. Completed multiple hands-on projects, including real-time applications, and led the final-year project team, strengthening leadership and technical abilities.</p>
            </div>
            <div className='w-full  pl-8 flex justify-end'>
              <div className='w-1/2 px-10'>
                <div className='flex gap-5'>
                  <h1 className='text-[1.2vw]'>JSpider - MERN Stack</h1>
                  <h1 className='text-[1.2vw]'>~</h1>
                  <h1 className='text-[1.2vw]'>2024</h1>
                </div>
                <p>MERN - MongoDB, Expressjs, Reactjs, Nodejs</p>
                <p className='py-2'>Completed intensive training on the MERN stack, covering React.js, Node.js, Express.js, and MongoDB. Gained practical experience through industry-oriented assignments, coding challenges, and building full-stack applications.</p>
              </div>
            </div>
            <div className='w-1/2 px-10'>
              <div className='flex gap-5'>
                <h1 className='text-[1.2vw]'>TCS - Tata Consultancy Services</h1>
                <h1 className='text-[1.2vw]'>~</h1>
                <h1 className='text-[1.2vw]'>2025</h1>
              </div>
              <p className='py-2'></p>
              <p>Technology Operations Analyst</p>
              <p>Preparing for a career in IT operations focusing on system monitoring, incident management, and application support. Equipped with strong analytical skills, adaptability, and foundational technical knowledge suitable for enterprise-level operations at TCS.</p>
            </div>
          </div>
          <input type="range" value={eduLoader} name="" id="" className='rotate-90 w-[100vh] cursor-pointer only-thumb absolute' />

        </div>
      </div>
      <div className='h-screen'></div>
    </>
  )
}

export default About
