import Navbar from "../components/Navabar";

function ProjectDescription({projectInfo}){
    return (
        <div>

            <div>
                <h1>{projectInfo.name}</h1>
            </div>

            <div>
                <p>{projectInfo.description}</p>
            </div>

            <div>
                <button onClick={""}>Back to All Projects</button>
            </div>
        </div>
    )
}

export default ProjectDescription;