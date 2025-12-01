import { useContext } from "react";
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { MyContext } from "../context/AppContext";

const NavButton = () => {
  let { isDark, setIsDark } = useContext(MyContext)
  
  return (
    <button className='cursor-pointer text-2xl' onClick={() => setIsDark(!isDark)}>{isDark ? <GoSun /> : <FaRegMoon />}</button>
  )
}

export default NavButton
