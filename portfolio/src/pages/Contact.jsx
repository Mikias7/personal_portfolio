import React from "react";

function Contact(){

    return (
        <div>
            {/* <h1 className="flex justify-center text-5xl font-bold">Contact</h1> */}

            <p className=" p-8 flex justify-center text-2xl font-bold">
                Reach out — I’d love to hear from you!
            </p>

            <div className="flex justify-center">
                <div className="flex flex-col space-y-4">
                    <p>Michael Bik</p>
                    <p>michael.bik@gmail.com</p>
                    <p>LinkedIn</p>
                    <p>GitHub</p>
                </div>
            </div>

        </div>
    )
}

export default Contact;