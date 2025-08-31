import Cards from "../components/Cards";
import image1 from "/public/images/img1.png"

function Projects(){

    return (
        <div>
            <h1 className="text-3xl font-bold">Projects</h1>

            <div class="justify-center">
                <Cards 
                    Title={"Augustana University Voting Platform "} 
                    Text={"Full-stack voting platform using React and Node.js"} ImgPath={image1}/>

                <Cards 
                    Title={"Solar Eclipse Simulation Software "} 
                    Text={"Interactive solar eclipse simulation tool"} ImgPath={image1}/>
            </div>
            
        </div>
    )
}

export default  Projects;