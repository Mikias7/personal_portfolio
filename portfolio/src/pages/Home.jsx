function Home(){

    const handleClick = () => {
        window.location.href = "mailto:mikias7t@gmail.com?subject=Contact%20Request&body=Hello%2C%20I%20would%20like%20to%20get%20in%20touch.";
    };

    return (
        <div>
            <h1>G'day, I'm</h1>
            <h1>Mikias Tadele,</h1>

            <div>
                <p>I’m a self-motivated student driven by a deep passion 
                    for leveraging software engineering and machine learning to 
                    effectively address business challenges. I'm continuously 
                    exploring new subjects to stay adaptable in changing 
                    environments, and I enjoy learning and tackling problems 
                    independently or as part of a team by developing coherent 
                    solutions.
                </p>

                <button onClick={handleClick}>Contact</button>
            </div>
        </div>
    )
}

export default Home;