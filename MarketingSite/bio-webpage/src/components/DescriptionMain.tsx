import { ReactNode } from "react";
import { Fragment } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';




const DescriptionMain =()=>{




    return(<Fragment>
        <div className="row mt-5">




            <div className="col-md-5">
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
            <img src="https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&w=1600"  alt="Join Us" style={{height:"800px",width:"600px", objectFit:"cover"}}/>
            </motion.div>
            </div>

            
            <div className="col-md-5">
            
            <div className="row mt-5"></div>
            <div className="row mt-5"></div>
            <div className="row mt-2"></div>
            <motion.div  initial={{ opacity: 0 }}  whileInView={{ opacity: 1, scale: [0.8,.85,.89,.94,1.3,1.2,0.92,.98,1.01,1,0.92,0.95,.99,1,1.01,1] }}>
                <h1><strong>
                "MEET US"
                </strong></h1>
                <hr></hr>

               

               <h2 style={{color:'orange'}}>"Gifted hand as a hand that gifts the world"</h2> 
            "At GiftPlus, our mission is to empower individuals and organizations with innovative solutions that drive success. 
            We are committed to delivering excellence in everything we do, from providing cutting-edge products to offering exceptional customer service. 
            Through collaboration, integrity, and a relentless pursuit of excellence, we aim to make a positive impact on the world. Our dedication to sustainability, 
            diversity, and social responsibility guides us in creating a better future for all. 
            Together, we strive to inspire, innovate, and transform the way people live and work, making the world a better place, one solution at a time."  
            <br>
            </br><br></br>









            <h1><strong>"WHAT WE DO"</strong></h1>
                <hr></hr>
                <h2 style={{color:'orange'}}>"Dedicated to providing with world class information to our clients"</h2>
            "GiftPlus is a renowned consultancy firm that specializes in providing tailored solutions to businesses across various industries. With a team of experienced professionals, GiftPlus offers comprehensive consulting services aimed at enhancing operational efficiency, driving growth, and achieving sustainable success for its clients."
           </motion.div>
            </div>
            




            <div className="col-md-1"></div>
        </div>
    </Fragment>)
    
}

export default DescriptionMain;