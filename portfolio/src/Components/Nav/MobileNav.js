import React from 'react'
import { Dropdown, Icon } from 'react-materialize';


const MobileNav=()=> {

    
    
        return (

            <div  >
             <nav className="nav-wrapper transparent hide-on-med-and-up">

               <a href="/" className="brand-logo center white-text">JN</a>


               <Dropdown id="Dropdown_6" trigger={<a className="btn-flat   " node="button">
                   <Icon className=" white-text large ">dehaze</Icon></a>}>
                
                <a className="transparent black-text"  href="#">about </a>
            
                <a className="transparent black-text"  href="#"> home </a>
            
                <a className="transparent black-text"  href="#"> Work </a>

                </Dropdown>




                    </nav>

            </div>
        )
   
}


export default MobileNav