import Cards from "../components/Cards";
import image1 from "/public/images/img1.png"
import "./Projects.css"

function Projects(){

    return (
        <div>

            <div data-aos="slide-down" data-aos-duration="4000">
                <h1 className="pt-20 flex justify-center text-5xl font-bold underline">Projects</h1>
            </div>
            
            
            <div className="p-8 flex justify-around">
                <div data-aos="slide-right">
                    <Cards 
                        Title={"Augustana University Voting Platform "} 
                        Text={"Full-stack voting platform using React and Node.js"} ImgPath={image1}/>
                </div>

                <div data-aos="slide-left">
                    <Cards 
                        Title={"Solar Eclipse Simulation Software "} 
                        Text={"Interactive solar eclipse simulation tool"} ImgPath={image1}/>
                </div>

            </div>

            <div className="p-8 flex justify-around">
                <div data-aos="fade-right">
                    <Cards 
                        Title={"Augustana University Voting Platform "} 
                        Text={"Full-stack voting platform using React and Node.js"} ImgPath={image1}/>
                </div>

                <div data-aos="fade-left">
                    <Cards 
                        Title={"Solar Eclipse Simulation Software "} 
                        Text={"Interactive solar eclipse simulation tool"} ImgPath={image1}/>
                </div>

            </div>
            
        </div>
    )
}

export default  Projects;