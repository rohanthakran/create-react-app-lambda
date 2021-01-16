import React from 'react';
import css  from './images/css3.svg';

const CardToll =(porps) =>{
    return (
        
        <React.Fragment>
        
      
 
  
 <div className="col-sm-2 col-10 space " style={{width:"auto"}}>
 
 <div className="colu">
        <div className="myimg">
  <img src={porps.shot} className="img-fluid" alt="Responsive"/>
  
  <h1 className="text-center title">{porps.title}</h1>
  </div>
</div>

  
</div>

           
        </React.Fragment>
    )
}
export default CardToll;