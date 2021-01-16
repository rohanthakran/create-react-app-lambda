import React from 'react';
import {NavLink} from 'react-router-dom'
import { FaCode } from 'react-icons/fa';

const Card =(props) =>{
    return (
        <React.Fragment>
      
                    <div className="col-sm-9 col-xs-4 col-md-4 col-lg-3
                     col-10 space1">
                    <div className="card" >

                     <img src={props.shot} className="img-fluid" alt="Responsive"/>
                     <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.project}</p>
            <div className="mybuttons">
                   <NavLink to="/" type="button" class="button1">See Code</NavLink>
                   <NavLink to="/" type="button" class="button1">Live Site</NavLink>
                   </div>
                  
    </div>
    </div>
  </div>
  
       </React.Fragment>
    )
}
export default Card;