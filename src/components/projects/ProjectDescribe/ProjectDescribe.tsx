import { projectType } from "../projectList";
import './projectDescribe.css'
export default function ProjectDescribe(props: {project: projectType}) {
    const { project } = props    
        const { folder, describe } = project      
        return (<>
            <div  id={`project-describe-${folder}`} className={`collapse project-describe ${folder}`} aria-expanded="false">
            <div className="container"><p>{describe}</p></div>
            <iframe src={`./src/components/projects/${folder}/`}></iframe>
        </div>
        </>
    )
}