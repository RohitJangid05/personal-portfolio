import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import Projects from '../src/pages/Projects'
import ProjectInfo from './pages/ProjectInfo'
import About from '../src/pages/About'
import { MyContext } from './context/AppContext'
import { useContext } from 'react'
import NavBar from './components/NavBar'

const App = () => {
  let { isDark } = useContext(MyContext)

  return (
    <div className={isDark ? "text-white bg-black" : "text-black bg-white"}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path={`/project-info/:id`} element={<ProjectInfo/>}/>
      </Routes>
    </div>
  )
}

export default App
