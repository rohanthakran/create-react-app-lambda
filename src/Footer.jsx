import React from 'react';
import {AiFillLinkedin,AiOutlineGithub} from 'react-icons/ai'
const Footer = () =>{
    return (
            <React.Fragment>
    <footer className="w-100 text-center foot" >
  

    <div className="col-lg-2 text-center mx-auto mb-4">
    <div className="icon1">
<AiFillLinkedin style={{color:"black", fontSize:"40px", marginRight:"20px", cursor: "pointer",  border:"2px solid black", borderRadius:"50%",padding:"5px"}}/>
<AiOutlineGithub style={{color:"black", fontSize:"40px", marginRight:"20px", cursor: "pointer", border:"2px solid black", borderRadius:"50%",padding:"5px"}}/>
    </div>   
    </div>
    &copy; Copyright 2021 itsrohanthakran
    </footer>
</React.Fragment>
    )
}
export default Footer