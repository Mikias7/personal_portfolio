import { useParams } from "react-router-dom";
import Navbar from "../components/Navabar";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const projects = {
    rideSharing: {
        route: "/projects/rideSharing",
        id: "rideSharing",
        title: "Ride Sharing App",
        description:"Collaborated with a team to develop a ride-sharing app for college students, addressing transportation challenges. Built core features using Swift and SwiftUI, integrating Firebase for backend services such as authentication, real-time data storage, and user management. Project gained recognition from the Augustana University president, with plans for pilot testing among students and potential expansion to other colleges."
    },
    votingPlatform: {
        route: "/projects/votingPlatform",
        id: "votingPlatform",
        title: "Augustana University Voting Platform",
        description: "Developed a full-stack voting platform using React and Node.js to replace Augustana’s outdated system, improving reliability, security, and user experience for 2,000+ students during campus elections. Implemented secure student authentication, anonymous encrypted voting, and real-time ballot processing. Collaborated with a team to deliver the project, earning $2,500 for our work."
    },
    solarEclipseSimulation: {
        route: "/projects/solarEclipseSimulation",
        id: "solarEclipseSimulation",
        title: "Solar Eclipse Simulation",
        description: "Built an interactive solar eclipse simulation tool for Augustana’s Astronomy class, enabling students to calculate eclipse paths, timings, and visualizations for use in coursework and assignments. Implemented the project in pure vanilla JavaScript with reusable, modular components inspired by React, optimizing the codebase for scalability and long-term maintainability without external dependencies. Collaborated on improving existing astronomy class simulation software by refactoring code, creating reusable components, and enhancing overall performance and stability. "
    },
    dataAugmentationTool: {
        route: "/projects/dataAugmentationTool",
        id: "dataAugmentationTool",
        title: "Data Augmentation Tool",
        description: "Developed a Python program to augment image data for machine learning models, using OpenCV to modify hue, brightness, position, and noise. Reduced image labeling time and improved dataset diversity, helping reduce overfitting and enhance machine learning model performance."
    },
    sudokuSolver: {
        route: "/projects/sudokuSolver",
        id: "sudokuSolver",
        title: "Sudoku Solver",
        description: "Developed an application to capture and solve Sudoku puzzles using a backtracking algorithm. Integrated computer vision and object recognition to detect and extract numbers from the board for accurate puzzle solving."
    },
    facialEmotionRecognition: {
        route: "/projects/facialEmotionRecognition",
        id: "facialEmotionRecognition",
        title: "Facial Emotion Recognition",
        description: "Collaboratively developed a machine learning model that can distinguish and classify different facial emotions. Utilized Python, TensorFlow, and Keras for model development and training, and also ensured peak performance by implementing a preprocessing pipeline that resizes, normalizes, and augments the training dataset."
    },
    microLearningApp: {
        route: "/projects/microLearningApp",
        id: "microLearningApp",
        title: "Micro Learning App",
        description: ""
    }

}

function ProjectDescription(){
    
    const { projectId } = useParams();
    const project = projects[projectId];

    return (
        <div>

            <div>
                <h1>{project.title}</h1>
            </div>

            <div>
                <p>{project.description}</p>
            </div>

            <div>
                <Link to={"/test_page"}>
                    <Button variant="success">Back to All Projects</Button>
                </Link>
            </div>
        </div>
    )
}

export default ProjectDescription;