import { ReactNode } from "react";
import { Fragment } from "react";
import { motion } from "framer-motion"

const DivisionSection =() =>{
    return(<Fragment>

        <div className="row mt-1">
            <div className="image-banner col-md-3" style={{ padding: "0" }}>
            <motion.div     whileHover={{ scale: 1.1 }}whileTap={{ scale: 0.9 }} ><img src="https://images.pexels.com/photos/733500/pexels-photo-733500.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="..." className="img-fluid" style={{height:"600px",width:"100%",objectFit:"cover"}}/>
            </motion.div>
            <div style={{ backgroundColor: "rgba(0, 0, 0, 1)" , padding: "20px" }}>
            <h6 style={{ color: "white" }} >"Big Ideas matter"</h6>
            </div>
            </div>

            <div className="col-md-3" style={{ padding: "0" }}>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                <img src="https://images.pexels.com/photos/1367278/pexels-photo-1367278.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="..." className="img-fluid" style={{height:"600px",width:"100%",objectFit:"cover"}}/>
                </motion.div>
            <div  style={{ backgroundColor: "rgba(0, 0, 0, 1)", padding: "20px" }}>
             <h6 style={{ color: "white" }} >"We have strength in diversity"</h6>
            </div>
            </div>

            <div className="col-md-3" style={{ padding: "0" }}>
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
            <img src="https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="..." className="img-fluid" style={{height:"600px",width:"100%",objectFit:"cover"}}/>
            </motion.div>
            <div  style={{ backgroundColor: "rgba(0, 0, 0, 1)", padding: "20px" }}>
             <h6 style={{ color: "white" }} >"Hats off to all pioneers of innovation"</h6>
            </div>
            </div>
            <div className="col-md-3" style={{ padding: "0" }}>
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
            <img src="https://images.pexels.com/photos/3026283/pexels-photo-3026283.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="..." className="img-fluid" style={{height:"600px",width:"100%",objectFit:"cover"}}/>
            </motion.div> 
            <div  style={{ backgroundColor: "rgba(0, 0, 0, 1)", padding: "20px" }}>
             <h6 style={{ color: "white" }} >We promote open discourse for supporting new ideas</h6>
            </div>
            </div>

        </div>





    </Fragment>
    )
}
export default DivisionSection;