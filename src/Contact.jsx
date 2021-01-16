import React from 'react';
import { HiOutlineMailOpen } from 'react-icons/hi';
import{BiPhone} from 'react-icons/bi'
import { IconContext } from "react-icons";
const Contact = () =>{
    return (
        <React.Fragment>
        <section id="contact">
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact_div">
            
                <div className="col-lg-9 mx-auto d-flex justify-content-between">
                            <form>
                            <h1>Leave a Message</h1>
             <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
             <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
              </div>
                </form>
                   
                    
                  <div className="col-md-4 list1">
                        <h1>Contact Me</h1>
                        <p>Please Reach out to Me for any opportunity</p>
                        <ul>
                        <li><HiOutlineMailOpen style={{color:"black", fontSize:"40px", marginRight:"10px", border:"2px solid black", borderRadius:"50%",padding:"5px"}}/>
                      
                       
                       rohankumarthakran@gmail.com
                        
                
                     </li>
                     <li><BiPhone style={{color:"black", fontSize:"40px", marginRight:"10px", border:"2px solid black", borderRadius:"50%",padding:"5px"}}/>+91 7011391100</li>
                         </ul>
                         
                  </div>
            
               
                </div>
              
            </div>
            </section>
        </React.Fragment>
    )
}
export default Contact;