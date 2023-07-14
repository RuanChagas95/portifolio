import { projectList, projectType } from './projectList'
import './projectGroup.css'
import { useNavigate, useParams } from 'react-router-dom'



function ProjectGroup() {
    const navigate = useNavigate()
    const params = useParams()

    const handleCLick = (folder: string) => {
        navigate(`projects/${folder}`)
    }
    return (
        <div className='projects'>
            <div className="btn-group" role="group" aria-label="Projects">

                {projectList.map((project: projectType) => {
                    return (<button key={project.folder}
                        className={`btn btn-primary ${project.folder === params.project ? 'active' : ''}`}
                        onClick={() => handleCLick(project.folder)}>
                        {project.name}
                    </button>)
                })}
            </div>

        </div>
    )
}

export default ProjectGroup