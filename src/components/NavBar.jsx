import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MyContext } from '../context/AppContext'
import NavButton from './NavButton';

const NavBar = () => {
    let { isDark } = useContext(MyContext)
    let { pathname } = useLocation()
    return (
        <nav
  className={`
    w-full flex justify-between items-center px-10 p-3 fixed z-90 
    backdrop-blur-xl
    ${isDark 
        ? "bg-white/00  text-white" 
        : "bg-black/00  text-black"
    }
  `}
>

            <Link to="/">
                <img className='w-[3vw]' src={`${isDark ? "/images/logo-dark.png" : "/images/logo-light.png"}`} alt="" />
            </Link>
            <div className='flex gap-5'>
                <>
                    {pathname !== "/about" && (
                        <Link id='about' to="/about" className="text-3xl font-semibold">About</Link>
                    )}
                    {pathname !== "/projects" && (
                        <Link to="/projects" className="text-3xl font-semibold">Projects</Link>
                    )}
                    <NavButton />
                </>
            </div>
        </nav>
    )
}

export default NavBar