import { projectList, projectType } from './projectList'
import './projectGroup.css'
import ProjectDescribe from './ProjectDescribe/ProjectDescribe'


function ProjectGroup() {
    return (
        <div className='projects'>
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
           {projectList.map((project: projectType, index) => BtnProject(project, index))}
        </div>
        {projectList.map((project: projectType) => <ProjectDescribe project={project}/>)}
</div>
    )
   
    function BtnProject(project: projectType, index: number) {
        const { name, folder } = project
        const btnId = `btnradio${index}`
        
        return (
            <>
        <input type="radio" className="btn-check" name="btnradio"  data-bs-toggle="collapse" id={btnId} data-bs-target={`.project-describe.${folder}, .project-describe.show`} aria-controls={`.project-describe`} aria-expanded="false"></input>
        <label className="btn btn-outline-primary" htmlFor={btnId}>{ name } </label>
        </>
    )
}
}

export default ProjectGroup