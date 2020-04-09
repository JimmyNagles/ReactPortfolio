import React from "react";




function Card(props) {
    return (
   
      <div className="col s6 m3 l3">
       <div className="card black ">
        <div className=" card-image grey darken-3" >
        
        <img className="circle " width="200" height="200"  src={props.image}></img>
        
        </div>
  
        <div className="content black white-text ">
          <ul>
      
          </ul>
        </div>
        <div className="card-action">
         
          {props.action}

        </div>


      </div>
      </div>
   
  
    );
  }
  
  export default Card;
  