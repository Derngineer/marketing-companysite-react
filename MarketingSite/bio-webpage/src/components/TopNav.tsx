import { ReactNode } from "react";
import { Fragment } from "react";





const TopNav =() =>{


    return(<Fragment>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home"><img src="public/Gift_plus-removebg-preview.png" alt="Banner Image" className="img-fluid" style={{height:"80px",width:"200px", objectFit:"cover"}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="/home">Home</a>
        <a className="nav-link" href="/learnmore">Learn more</a>
        <a className="nav-link" href="/contactus">Contact us</a>
        {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
      </div>
    </div>
  </div>
</nav>
    </Fragment>

    )
}

export default TopNav;