import { projectList } from "../projectList";
import './projectDescribe.css'
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
export default function ProjectDescribe() {
    const { project: folder } = useParams()
    const project = projectList.find((project) => project.folder === folder)
    const projectRef = useRef<HTMLIFrameElement | null>(null)    
    if (!project){
        return null
    }
    const [height, setHeight] = useState(600)
    const adjustHeigthSize = () => {
        if (projectRef.current?.contentDocument) {           
            setHeight(projectRef.current.contentDocument.documentElement.scrollHeight)
        }
    }
    const {describe} = project
        return (<>
            <div className="container column">
            <div className="container text-center"><p>{describe}</p></div>
            <iframe height={height + 'px'} onLoad={adjustHeigthSize} ref={projectRef} src={`/src/components/projects/${folder}/`}></iframe>
        </div>
        </>
    )
}