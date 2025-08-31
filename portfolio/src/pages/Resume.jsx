import Button from 'react-bootstrap/Button';

function Resume(){

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/public/mikias_resume.pdf";
        link.download = "mikias_resume.pdf";
        link.click();
    };

    return (
        <div>
            {/* <h1 className="text-5xl font-bold flex justify-center">Resume</h1> */}

            <div class="pl-20">
                <Button 
                    variant='primary'
                    onClick={handleDownload}>
                        Download</Button>
            </div>

            <div class="flex justify-center pt-8">
                <img
                    src="/public/resume.png"
                    alt="My Resume"
                    style={{ width: "80%", maxWidth: "900px", border: "1px solid #ccc", borderRadius: "8px" }}
                />
            </div>
        </div>
    )
}

export default Resume;