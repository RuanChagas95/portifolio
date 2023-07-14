import { projectList } from "../projectList";
import './projectDescribe.css'
import { useParams } from "react-router-dom";
export default function ProjectDescribe() {
    const { project: folder } = useParams()
    const project = projectList.find((project) => project.folder === folder)
    if (!project){
        return false
    }
    const {describe} = project
        return (<>
            <div className="project">
            <div className="container"><p>{describe}</p></div>
            <iframe src={`/src/components/projects/${folder}/`}></iframe>
        </div>
        </>
    )
}