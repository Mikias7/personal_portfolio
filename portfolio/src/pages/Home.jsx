import Button from 'react-bootstrap/Button';
import DecryptedText from '../blocks/DecryptedText/DecryptedText';
import BlobCursor from '../blocks/BlobCursor/BlobCursor';

function Home(){

    const handleClick = () => {
        window.location.href = "mailto:mikias7t@gmail.com?subject=Contact%20Request&body=Hello%2C%20I%20would%20like%20to%20get%20in%20touch.";
    };

    return (
        <div>

            <div>
                <BlobCursor
                    blobType="circle"
                    fillColor="#5227FF"
                    trailCount={5}
                    sizes={[60, 125, 175]}
                    innerSizes={[20, 35, 25]}
                    innerColor="rgba(255,255,255,0.8)"
                    opacities={[0.1, 0.1, 0.6]}
                    shadowColor="rgba(0,0,0,0.75)"
                    shadowBlur={5}
                    shadowOffsetX={10}
                    shadowOffsetY={10}
                    filterStdDeviation={30}
                    useFilter={true}
                    fastDuration={0.1}
                    slowDuration={0.5}
                    zIndex={100}
            />
            </div>

            <div className="justify-center pt-8 pr-8 pl-8">
                <h1 className=" text-6xl font-bold font-sans tracking-wide">G'day, I'm</h1>
                <h1 className="text-6xl font-bold font-sans tracking-wide">Mikias Tadele,</h1>

                <div className="font-mono text-2xl justify-center pt-3 pr-8  text-green-600">
                    <DecryptedText  text={"Aspiring Software Developer"} />
                </div>
            </div>

            <div>
                <p className="text-l justify-center p-8 text-justify">
                    I’m a curious and motivated student with a strong passion for 
                    software engineering and machine learning. I enjoy exploring 
                    complex problems, learning new technologies, and finding practical 
                    solutions that make an impact. My enthusiasm for continuous learning 
                    drives me to tackle challenges independently or collaboratively, while 
                    staying adaptable in evolving environments.

                    I thrive in team settings, having contributed to several group projects 
                    and completed two internships that exposed me to diverse technologies and 
                    workflows. I’m flexible across domains—including machine learning, frontend, 
                    backend, cloud, and mobile apps—allowing me to contribute wherever needed. 
                    I’m excited to bring my curiosity, versatility, and collaborative mindset to 
                    make meaningful contributions in any environment.
                </p>
            </div>

            <div className="justify-center pb-8 pr-8 pl-8">
                <Button 
                    onClick={handleClick} 
                    // class="w-20 rounded-lg bg-blue-500 shadow-md"
                    variant="success"
                    >
                        Contact
                </Button>
            </div>
        </div>
    )
}

export default Home;