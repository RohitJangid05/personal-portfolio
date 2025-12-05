import { useContext } from "react";
import AnimatedStair from "../components/AnimatedStair";
import { data } from "../assets/data";
import { FaArrowRightLong } from "react-icons/fa6";
import { MyContext } from "../context/AppContext";

const Projects = () => {
  const { isDark } = useContext(MyContext);

  return (
    <>
      <AnimatedStair />

      <div
        className={`min-h-screen w-full transition-colors duration-300`}
      >
        <div className="max-w-6xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-0">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[230px]">
            {data.map((item, index) => {
              const isBig = index % 3 === 0;

              return (
                <div
                  key={item.id}
                  className={`
                    group relative overflow-hidden rounded-2xl backdrop-blur-sm 
                    transition-colors duration-300
                    ${isDark
                      ? "border border-zinc-700/70 bg-zinc-900/70"
                      : "border border-zinc-300 bg-white"}
                    ${isBig ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}
                  `}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Sliding Overlay */}
                  <div
                    className={`
                      absolute inset-x-0 bottom-0 h-full overflow-scroll
                      translate-y-[100%] group-hover:translate-y-0
                      transition-all duration-500 ease-out
                      px-5 py-4 flex flex-col gap-3
                      ${isDark
                        ? "bg-black text-white"
                        : "bg-white text-black"}
                    `}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h1
                        className={`text-xl sm:text-2xl font-semibold transition-colors duration-300`}
                      >
                        {item.title}
                      </h1>
                    </div>

                    <p
                      className={`text-sm leading-relaxed transition-colors duration-300`}
                    >
                      <span className="text-[#ffa500] font-medium">
                        Description:{" "}
                      </span>
                      {item.description}
                    </p>

                    <ul
                      className={`
                        list-disc pl-5 mt-1 space-y-1 text-sm
                        transition-colors duration-300`}
                    >
                      {item.ul.map((text, idx) => {
                        const textArry = text.split(":");
                        return (
                          <li key={idx}>
                            <span className="text-[#ffa500] font-medium">
                              {textArry[0]}:
                            </span>{" "}
                            {textArry[1]}
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-3">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`
                          inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full
                          transition-colors duration-300
                          bg-[#ffa500] text-zinc-900 hover:bg-[#ffba33]`}
                      >
                        Live Demo
                        <FaArrowRightLong className="text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
