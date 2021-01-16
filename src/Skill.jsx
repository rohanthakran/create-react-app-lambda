import React from 'react';
import img1 from './laptop.jpg'
import CardToll from './CardToll'
import Tool from './Tool';
const Projects = () =>{
    return (
        <React.Fragment>
           <div className ="my-5" id="skill">
                <h1 className="text-center font">Skills</h1>
                <p className="text-center h4" >Languages and Technologies that i have learned and applied into my project</p>
           </div>
          
           <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-lg-7 col-sm-10 col-xs-4 col-md-8 mx-auto text-center">
                    <div className="row gy-2 align-items-center justify-content-center">
                           {Tool.map((val,inde) =>{
                               return(
                               <CardToll shot={val.imgsrc}
                                    title ={val.title}
                                    project = {val.projectname}/>
                               )
                           })}
                        </div>  

                    </div>
                    </div>
                </div>
              

        </React.Fragment>
    )
}
export default Projects;