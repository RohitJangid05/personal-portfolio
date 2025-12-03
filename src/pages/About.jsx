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
import Title from '../components/Title'


const About = () => {
  gsap.registerPlugin(ScrollTrigger)

  let [eduLoader, setEduLoader] = useState(-12.5)
  let containerRef = useRef(null)
  let thumbRef = useRef(null)

  let imageContainerRef = useRef(null)
  let imageRef = useRef(null)

  const educationData = [
    {
      title: "Secondary School Leaving Certificate (10th)",
      year: "2019",
      org: "Seventh-Day English Medium High School, Belagavi",
      desc:
        "Successfully completed SSLC with a strong academic foundation, securing First Class. Built core competencies in mathematics, science, and languages, forming the base for higher studies in computer science",
      side: "left",
    },
    {
      title: "Pre-University Course (12th)",
      year: "2021",
      org: "Jain PU College, Belagavi",
      desc:
        "Achieved Distinction in PUC with excellent performance. Developed strong analytical and problem-solving skills that helped transition into the world of programming and computer applications.",
      side: "right",
    },
    {
      title: "Bachelor of Computer Application - 8.2 CGPA",
      year: "2024",
      org: "Rani Channamma University, Belagavi",
      desc:
        "Graduated with a solid foundation in programming, web development, data structures, and databases. Developed multiple real-time projects and led the final-year project team, strengthening leadership and teamwork skills. Also participated in various intra- and inter-college hackathons, showcasing creativity and problem-solving abilities.",
      side: "left",
    },
    {
      title: "JSpiders - MERN Stack",
      year: "2024",
      org: "MERN - MongoDB, Express.js, React.js, Node.js",
      desc:
        "Completed intensive training on the MERN stack, covering React.js, Node.js, Express.js, and MongoDB. Gained practical experience through industry-oriented assignments, coding challenges, and building full-stack applications.",
      side: "right",
    },
    {
      title: "TCS - Tata Consultancy Services",
      year: "2025",
      org: "Technology Operations Analyst",
      desc:
        "As a Technology Operation Analyst, I ensure the smooth functioning of critical systems by monitoring performance, analyzing incidents, and maintaining database and server efficiency. I collaborate with cross-functional teams to drive operational stability, optimize workflows, and support business continuity through proactive issue resolution.",
      side: "left",
    },
  ];

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
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 50%",
      end: "bottom 50%",
      scrub: 1,
      onUpdate: (self) => {
        const min = -12.5;
        const max = 87.5;
        const mapped = min + self.progress * (max - min);
        setEduLoader(mapped);
      },

    });
  }, []);



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
        <Title text={"Skills"} />
        <div className="w-full flex flex-col items-center gap-6 py-10">
          <SkillBar name={<FaHtml5 />} value={95} />
          <SkillBar name={<FaCss3Alt />} value={93} />
          <SkillBar name={<RiJavascriptFill />} value={85} />
          <SkillBar name={<FaReact />} value={78} />
          <SkillBar name={<FaNodeJs />} value={65} />
          <SkillBar name={<SiExpress />} value={62} />
          <SkillBar name={<SiMongodb />} value={60} />
        </div>
      </div>
      <div className="w-full  flex flex-col items-center gap-6 py-10">
        <Title text={"From Classroom to Corporate: My IT Journey"} />
        <div ref={containerRef} className='w-[80vw] h-full flex justify-center overflow-hidden relative '>
          <div className='h-full border-2 w-[0.2vw] absolute bg-white rounded-full flex items-center justify-center'>
            <div
              ref={thumbRef}
              className="w-[0.2vw] h-1/4 absolute flex items-center justify-center bg-[#00897B] shadow-[0_0_20px_6px_rgba(0,136,206,0.6)]"
              style={{ top: `${eduLoader}%` }}
            >
              <div className='w-[1vw] z-10 h-[1vw] bg-[#ffa500] rounded-full absolute '></div>
            </div>
          </div>
          <div className='w-full'>
            <div className='h-full py-10'>
              {educationData.map((data) => {
                return (<div className={`flex ${data.side=="right"?"justify-end":""}`}>
                  <div className='w-1/2 px-5'>
                    <h1 className='text-[1.5vw] text-[#ffa500] flex justify-between'>
                      <span>{data.title}</span>
                      <span>~</span>
                      <span>{data.year}</span>
                    </h1>
                    <p >{data.org}</p>
                    <p className='py-2'>{data.desc}</p>
                  </div>
                </div>)
              })
              }
            </div>
          </div>
        </div>
      </div>
      <div className='h-screen'></div>
    </>
  )
}

export default About
