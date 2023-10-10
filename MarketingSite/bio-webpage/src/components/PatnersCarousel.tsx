import { ReactNode } from "react";
import { Fragment } from "react";
import {motion} from "framer-motion"



const PartnersCarousel =()=>{


    return( <Fragment>
<div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" style={{marginTop:'5px', marginBlockStart:"5px", marginBlockEnd:"5px"}}>

<div className="carousel-inner">
  <div className="carousel-item active">
    <div className="row">
      <div className="col-sm-4 ">
      <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
      <div className="card bg-dark" style={{ height: "300px", marginLeft: "0.5rem" }}>
          <div className="card-body text-white">
            <div className ="row"><div className="col-10"><img src="https://londonspeakerbureau.com/wp-content/themes/london-speaker-bureau/img/LSB_LOGO.svg" alt="Banner Image" className="img-fluid" style={{height:"200px",width:"200px", objectFit:"cover"}} />
                    </div><div className="col-2">          
                </div>
                <hr></hr>
                "The partnership with GiftPlus has opened doors for innovative learning experiences, benefiting our institution and students alike."
                </div>
          </div>
        </div>
      </motion.div>
        
      </div>
      <div className="col-sm-4">
      <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
      <div className="card bg-dark" style={{ height: "300px", marginLeft: "0.5rem" }}>
          <div className="card-body text-white">
          <div className ="row"><div className="col-12"> <img src="https://vusithembekwayo.com/wp-content/uploads/2022/08/Forbes.png" alt="Banner Image" className="img-fluid" style={{height:"200px",width:"800px", objectFit:"cover"}} />
          </div><div className="col-2">

          </div>
          <hr></hr>
          "With your generous contributions, we can continue to change lives through education. Join us in this noble endeavor."</div>
          </div>
        </div>
      </motion.div>
      
        
      </div>
      <div className="col-sm-4 ">
      <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
      <div className="card bg-dark" style={{ height: "300px", marginLeft: "0.5rem" }}>
          <div className="card-body text-white">
          <div className ="row"><div className="col-sm-12"> <img src="https://vusithembekwayo.com/wp-content/uploads/2022/08/Business-insider.png" alt="Banner Image" className="img-fluid" style={{height:"200px",width:"800px", objectFit:"cover"}} />
          </div><div className="col-sm-2">
               

                    </div>
                    <hr></hr>
                    "Supporting GiftPlus is an investment in the future, ensuring that every student has access to quality education."</div>
          </div>
        </div>
      </motion.div>
        
      </div>
    </div>
  </div>
  
    {/* CARD SET 2 */}
        {/* cards 2 */}        
<div className="carousel-inner">
  <div className="carousel-item active">
    <div className="row">
      <div className="col-sm-4 ">
      <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
      <div className="card bg-dark" style={{ height: "300px", marginLeft: "0.5rem" }}>
          <div className="card-body text-white">
          <div className ="row"><div className="col-12">
          <img src="https://vusithembekwayo.com/wp-content/uploads/2022/08/Bloomberg.png" alt="Banner Image" className="img-fluid" style={{maxHeight:"400px",maxWidth:"100%", objectFit:"cover"}} /></div>
          <div className="col-0"></div>
          <hr></hr>
          "As a donor to GiftPlus, I've witnessed the transformative power of education. Join me in making a difference."</div>
          </div>
        </div>
      </motion.div>
        
      </div>
      <div className="col-sm-4">
        
        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
        <div className="card bg-dark" style={{ height: "300px", marginLeft: "0.5rem" }}>
        <div className="card-body text-white">
          <div className ="row"><div className="col-10"><img src="https://scholar.harvard.edu/sites/scholar.harvard.edu/files/you/files/harvard_wreath_logo_1_1.png?m=1495643981" alt="Banner Image" className="img-fluid" style={{height:"200px",width:"200px", objectFit:"cover"}} /></div>
         <div className="col-2"></div>
         <hr></hr> 
         "Through our partnership with GiftPlus, we support educational initiatives that align with our values of commitment to education."
         </div>
          </div>
          </div>
  </motion.div>
        
        
  </div>
      <div className="col-sm-4">
      <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
      <div className="card bg-dark" style={{ height: "300px", marginLeft: "0.5rem" }}>
          <div className="card-body text-white">
          <div className ="row"><div className="col-10"> <img src="https://vusithembekwayo.com/wp-content/uploads/2022/08/yahoo-finance.png" alt="Banner Image" className="img-fluid" style={{height:"200px",width:"800px", objectFit:"cover"}} />
        </div><div className="col-2">
        </div>
        <hr></hr>
        "Partnering with GiftPlus has enriched our corporate social responsibility initiatives, driving positive change in our community."</div>
          </div>
        </div>
      </motion.div>
        
      </div>
    </div>
  </div>
</div>

{/* CARD SET 2 */}
{/* cards 3 */}{/* LAST CAROUSEL */} 

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</Fragment>)
}

export default PartnersCarousel;