import React from 'react'

const MobileNav=(props)=> {
    
        return (

            <div className="nav-mobile orange darken-4 hide-on-med-and-up" >
               <a href="/" className="brand-logo center">Jn</a>
                    <ul  className=" black-text">                       
                        <li><a href="/">About</a></li>
                        <li><a href="collapsible.html">Work</a></li>
                        <li><a href="collapsible.html">Contact</a></li>       
                    </ul>
            </div>
        )
   
}


export default MobileNav