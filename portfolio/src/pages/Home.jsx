import Button from 'react-bootstrap/Button';

function Home(){

    const handleClick = () => {
        window.location.href = "mailto:mikias7t@gmail.com?subject=Contact%20Request&body=Hello%2C%20I%20would%20like%20to%20get%20in%20touch.";
    };

    return (
        <div>

            <div class="justify-center pt-8 pr-8 pl-8">
                <h1 className="text-5xl font-bold">G'day, I'm</h1>
                <h1 className="text-5xl font-bold">Mikias Tadele,</h1>
            </div>

            <div>
                <p class="text-2xl justify-center p-8">I’m a self-motivated student driven by a deep passion 
                    for leveraging software engineering and machine learning to 
                    effectively address business challenges. I'm continuously 
                    exploring new subjects to stay adaptable in changing 
                    environments, and I enjoy learning and tackling problems 
                    independently or as part of a team by developing coherent 
                    solutions.
                </p>
            </div>

            <div class="justify-center pb-8 pr-8 pl-8">
                <Button 
                    onClick={handleClick} 
                    // class="w-20 rounded-lg bg-blue-500 shadow-md"
                    variant="primary"
                    >
                        Contact
                </Button>
            </div>
        </div>
    )
}

export default Home;