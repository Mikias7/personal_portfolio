import Cards from "../components/Cards";
import image1 from "/public/images/img1.png"

function Projects(){

    return (
        <div>
            <h1 className="pt-8 flex justify-center text-5xl font-bold underline">Projects</h1>

            <div class="p-8 flex justify-around">
                <div>
                    <Cards 
                        Title={"Augustana University Voting Platform "} 
                        Text={"Full-stack voting platform using React and Node.js"} ImgPath={image1}/>
                </div>

                <div>
                    <Cards 
                        Title={"Solar Eclipse Simulation Software "} 
                        Text={"Interactive solar eclipse simulation tool"} ImgPath={image1}/>
                </div>

            </div>

            <div class="p-8 flex justify-around">
                <div>
                    <Cards 
                        Title={"Augustana University Voting Platform "} 
                        Text={"Full-stack voting platform using React and Node.js"} ImgPath={image1}/>
                </div>

                <div>
                    <Cards 
                        Title={"Solar Eclipse Simulation Software "} 
                        Text={"Interactive solar eclipse simulation tool"} ImgPath={image1}/>
                </div>

            </div>
            
        </div>
    )
}

export default  Projects;