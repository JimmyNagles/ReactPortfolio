import React from 'react'
import { Dropdown, Button,Divider,Icon } from 'react-materialize';


const MobileNav=()=> {

    
    
        return (

            <div  >
                    <nav className="nav-wrapper blue darken-4 hide-on-med-and-up">

               <a href="/" className="brand-logo center orange-text text-darken-4">JN</a>


               <Dropdown id="Dropdown_6" trigger={<a className="btn-flat  " node="button">
                   <Icon className=" orange-text text-darken-4 large ">dehaze</Icon></a>}>
                
                <a className="blue darken-4 orange-text text-darken-4"  href="#">about </a>
            
                <a className="blue darken-4 orange-text text-darken-4"  href="#"> home </a>
            
                <a className="blue darken-4 orange-text text-darken-4"  href="#"> Work </a>

</Dropdown>




                    </nav>

            </div>
        )
   
}


export default MobileNav