import { Fragment } from "react";
import "/Users/mac/reactsoloproject/bio-webpage/src/MainBanner.css"

import { useState } from "react";
import Typewriter from "typewriter-effect";


const MainBanner =() =>{

    const [currentText, setCurrentText] =useState("");


    return(
        <Fragment>
        <div className="video-banner text-center" style={{height:"600px",width:'100%'}} >
        <div className="overlay"></div>
            
            <video src="src/assets/pexels-diva-plavalaguna-6192775 (2160p).mp4" autoPlay
        muted
        loop  style={{height:"100%",width:"100%", objectFit:"cover"}} />

            
            <div className="position-absolute top-50 start-50 translate-middle text-center">
            <div>
            
            {/* Your component content */}
            <strong><h1 style={{fontFamily:"helvetica", color:'white'}}>
                <Typewriter
                options={{
                    autoStart:true,
                    loop:true,
                    delay: 50,
                    strings:["TALK ABOUT INNOVATION"]
                }}               
                />
                
                </h1></strong>
            <hr></hr>
           <a href="/contactus"> <button className="btn btn-custom-primary">TALK TO US</button></a>
                        <a href="/learnmore"><button
            className="btn btn-custom-secondary"
            style={{
                marginLeft: "0.5rem",
                color: "white",
                borderColor: "white", // Initial border color
            }}
            >
            LEARN MORE
            </button></a>

            </div>
        </div>
        </div>




        </Fragment>
    )
}

export default MainBanner;