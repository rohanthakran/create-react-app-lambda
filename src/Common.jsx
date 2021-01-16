import React from 'react';

const Common = (props) =>{
    return (
        <React.Fragment>
       
        <div className="home">
           <div className="d-flex align-items-center justify-content-center" style={{height: "630px"}}>
           <div >
           <h1>Hello, I'm <span class="">Rohan Thakran</span>. <br/> I'm a Mern Stack Developer.</h1>
           
           </div>
           </div>
           </div>
                  { /* <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="text-center">
                                <h1>{props.intro} <span class="">Rohan Thakran</span> And <br/> I am Mern Stack Developer</h1>

                            <div className="mt-3">
                                <a href="/" className="btn btn-outline-primary">Get Started</a>
                            </div>
    </div>*/}
{/*<div className="col-lg-6 order-1 order-lg-2 header-img">
                     <img src ={props.imgr} className="img-fluid animated" alt="alternative"/>
    </div>*/}
                      
                           
                
            
        </React.Fragment>
    )
}
export default Common;