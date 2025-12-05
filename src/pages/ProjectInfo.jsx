import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'

const ProjectInfo = () => {
    let path = useParams()
    return (
        <>
            <NavBar />
            <h1>{path.id}</h1>
        </>
    )
}

export default ProjectInfo
