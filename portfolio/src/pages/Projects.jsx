import Cards from "../components/Cards";
import image1 from "/public/images/img1.png"
import "./Projects.css"

function Projects(){

    return (
        <div className="p-8">

            <div data-aos="slide-down" data-aos-duration="2000" className="flex justify-between items-center pt-20">
                <h1 className="text-5xl font-bold font-sans tracking-wide text-green-900">----</h1>
                <h1 className="text-5xl font-bold font-sans tracking-wide text-green-900">Projects</h1>
                <h1 className="text-5xl font-bold font-sans tracking-wide text-green-900">-------------------------</h1>
            </div>
            
            
            <div className="p-8 flex justify-around">
                <div data-aos="slide-right">
                    <Cards 
                        Title={"Ride Sharing App"} 
                        Text={"Carpooling App for College students using Swift"} ImgPath={image1}/>
                </div>

                <div data-aos="slide-left">
                    <Cards 
                        Title={"Augustana University Voting Platform "} 
                        Text={"Full-stack voting platform using React and Node.js"} ImgPath={image1}/>
                </div>

                
            </div>

            <div className="p-8 flex justify-around">
                <div data-aos="fade-right">
                    <Cards 
                        Title={"Solar Eclipse Simulation Software"} 
                        Text={"Interactive solar eclipse simulation tool"} ImgPath={image1}/>
                </div>

                <div data-aos="fade-left">
                    <Cards 
                        Title={"Data Augmentation Tool"} 
                        Text={"Tool used for generating and augmenting image data"} ImgPath={image1}/>
                </div>
            </div>

            <div className="p-8 flex justify-around">
                    <div data-aos="fade-right">
                        <Cards 
                            Title={"Sudoku Solver"} 
                            Text={"Computer vision based sudoku solver"} ImgPath={image1}/>
                    </div>

                    <div data-aos="fade-left">
                        <Cards 
                            Title={"Facial Emotion Recognition"} 
                            Text={"Machine Learning model used to detect emotion"} ImgPath={image1}/>
                    </div>
                </div>
            
        </div>
    )
}

export default  Projects;