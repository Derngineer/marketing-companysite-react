import { ReactNode } from "react";
import { Fragment } from "react";
import { motion } from "framer-motion"


const Video =() =>{



    return(<Fragment>

        <div className="row m-5">
        <div className="row mt-5"></div>
            <div className="row mt-5"></div>
            <div className="text col-5 ">
            <motion.div  initial={{ opacity: 0 }}  whileInView={{ opacity: 1, scale: [0.8,.85,.89,.94,1.3,1.2,0.92,.98,1.01,1,0.92,0.95,.99,1,1.01,1] }}>

            <h1 mr-5 ><strong>
                "OUR WORK CULTURE & ETHIC"
                </strong></h1>
                <hr></hr>
                <h2 style={{color:'orange'}}>"We have a gift of brilliant work ethic and an inclusive culture"</h2>
                "At GiftPlus, we pride ourselves on fostering a work environment characterized by a strong 
                and positive work ethic. Our company culture is built on core values that promote collaboration, innovation, and excellence.
                A good work ethic at GiftPlus means employees are committed to delivering the best service to our clients. <br></br>
                It entails a dedication to integrity, professionalism, and a strong sense of responsibility in every task undertaken. 
                <br></br>
                Our team members consistently go the extra mile to ensure our clients' needs are not only met but exceeded.
                Our culture encourages open communication and values the contributions of each team member. 
                We believe in the power of diversity and inclusion, recognizing that different perspectives drive 
                creativity and success. At GiftPlus, every voice is heard, and ideas are valued.
               <br></br><br></br>
               </motion.div>

            </div>
            <div className="col-1"></div>
            <div className="video col-6">

            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>

            <iframe
                width="100%"
                height="700px"
                src="https://www.youtube.com/embed/r0xOGG2C1eI?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            >
                
            </iframe>
            </motion.div>                
            </div>
        </div>
  
  );

    </Fragment>)
}

export default Video;