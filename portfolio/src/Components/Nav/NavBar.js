import React from 'react'
import MobileNav from "./MobileNav"

 function NavBar() {
    
        return (
            <div>

                <MobileNav/>

                <nav className="nav-wrapper orange darken-4 hide-on-small-only	 ">




                     <a href="/" className="brand-logo center">JN</a>
                    <ul  className=" black-text">                       
                        <li><a href="/">About</a></li>
                        <li><a href="collapsible.html">Work</a></li>
                        <li><a href="collapsible.html">Contact</a></li>       
                    </ul>

            
                  
                </nav>

       
  
  
            </div>
        )
  
}

export default NavBar
