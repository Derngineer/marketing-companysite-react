import { ReactNode } from "react";
import { Fragment } from "react";
import {motion} from "framer-motion"
const Testimonials =() =>{



    return(<Fragment>
        <div className = "row mt-5 mb-5">

        <div className="card col-md-4 text-center border-0">
        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
        <img
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="card-img-top rounded-circle mx-auto mt-3"
            alt="..."
            style={{ width: "200px", height: "200px", objectFit:'cover' }}
                />
        </motion.div>
        
                <div className="card-body">
                    <p className="card-text">
                    "I highly recommend GiftPlus! Their gift selection is outstanding, and their customer service is top-notch. As a marketing professional with over 10 years of experience, I've used their corporate gifting solutions for client appreciation events, and the results have been fantastic. GiftPlus is my go-to for memorable gifts."
                    <br></br>
                    <hr/>
                    - SARAH ANDERSON, MARKETING DIRECTOR


                </p>
        </div>
    </div>


    <div className="card col-md-4 text-center border-0">
    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img
            src="https://images.pexels.com/photos/948875/pexels-photo-948875.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="card-img-top rounded-circle mx-auto mt-3"
            alt="..."
            style={{ width: "200px", height: "200px", objectFit:'cover' }}
                />
    </motion.div>
        
                <div className="card-body">
                    <p className="card-text">
                    "GiftPlus is a game-changer for personal and corporate gifting. With a background in finance, I appreciate their cost-effective solutions and the ability to customize gifts. Their attention to detail sets them apart. GiftPlus has become my trusted partner in creating lasting impressions."
                    <br></br>
                    <hr/>
                    - EMMA JONES, FINANCIAL ANALYST
                   
                </p>
        </div>
    </div>


    <div className="card col-md-4 text-center border-0">
    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
    <img
            src="https://images.pexels.com/photos/12649476/pexels-photo-12649476.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="card-img-top rounded-circle mx-auto mt-3"
            alt="..."
            style={{ width: "200px", height: "200px", objectFit:'cover' }}
                />
    </motion.div>

                <div className="card-body">
                    <p className="card-text">
                    "I've been a loyal customer of GiftPlus for years. Their wide range of gifts suits every occasion. As a tech entrepreneur with a busy schedule, GiftPlus has made my life easier. Their efficient delivery and personalized options make gift-giving a breeze."
                    <br></br>
                    <hr/>
                  - JOHN SMITH, TECH ENTREPRENEUR

                </p>
        </div>
    </div>









 

        </div>


    </Fragment>)
}

export default Testimonials;