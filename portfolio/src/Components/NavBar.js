import React from 'react'
import {Icon,Dropdown,Button,Divider} from 'react-materialize';



 function Navbar() {
    
        return (
            <div>


                <nav>

                    <div className="nav-wrapper black">
               
                    <a href="/" className="brand-logo center">JN</a>

                    
                    <ul id="nav-mobile" className="right hide-on-med-and-down white-text">
                      
                        <li><a href="/">Details</a></li>
                        <li><a href="collapsible.html">About</a></li>
                        
                        
                    </ul>
             

                  </div>
                </nav>

       
  
  
            </div>
        )
  
}

export default Navbar
