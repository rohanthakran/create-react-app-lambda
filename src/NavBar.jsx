import React from 'react';
import {Link} from 'react-scroll'
const Navbar =() =>{
    return(
      <React.Fragment>

      <div className="container-fluid nv_bg">
          <div className="row">
            <div className=" col-lg-10  col-m-3 mx-auto ">
         
      <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="home">Itsrohanthakran</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link activeClassName="menu_active" exact className="nav-link "spy={true} smooth={true}  aria-current="page" to="home">Home</Link>
            </li>
            <li exact className="nav-item">
              <Link activeClassName="menu_active" exact className="nav-link" spy={true} smooth={true} to="about">About</Link>
            </li>
            <li exact className="nav-item">
              <Link activeClassName="menu_active" exact className="nav-link" spy={true} smooth={true} to="project">Project</Link>
            </li>
            <li exact className="nav-item">
            <Link activeClassName="menu_active" exact className="nav-link" spy={true} smooth={true} to="skill">Skill</Link>
          </li>
            <li exact className="nav-item">
            <Link activeClassName="menu_active" exact className="nav-link" spy={true} smooth={true} to="contact">Contact</Link>
          </li>
          
          </ul>
         
        </div>
      </div>
    </nav>
    </div>
    </div>
</div>
        </React.Fragment>
    )
}
export default Navbar