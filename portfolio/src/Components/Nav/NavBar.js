import React from 'react'
import MobileNav from "./MobileNav"

 function NavBar() {
    
        return (
            <div>

                <MobileNav/>
                <nav className="nav-wrapper transparent hide-on-small-only	 ">

                     <a href="/" className="brand-logo center white-text text-darken-4">JN</a>
                    <ul  className=" orange-text">                       
                        <li><a className=" white-text text-darken-4" href="/">About</a></li>
                        <li><a className=" white-text text-darken-4" href="collapsible.html">Work</a></li>
                        <li><a className=" white-text text-darken-4" href="collapsible.html">Contact</a></li>       
                    </ul>

            
                  
                </nav>

       
  
  
            </div>
        )
  
}

export default NavBar
