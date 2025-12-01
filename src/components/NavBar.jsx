import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MyContext } from '../context/AppContext'
import NavButton from './NavButton';

const NavBar = () => {
    let { isDark } = useContext(MyContext)
    let { pathname } = useLocation()
    return (
        <nav
            className={`w-full flex justify-between items-center p-3 fixed z-90 ${isDark ? "bg-black text-white" : "bg-white text-black"
                }`}
        >
            <Link to="/" className='text-5xl font-bold uppercase'>Rohit</Link>
            <div className='flex gap-5'>
                {pathname == "/" ?
                    (<>
                        <Link to='projects' className='text-3xl font-semibold'>Projects</Link>
                        <Link to='/about' className='text-3xl font-semibold'>About</Link>
                       <NavButton/>
                    </>)
                    :
                    (<NavButton/>)}

            </div>
        </nav>
    )
}

export default NavBar
