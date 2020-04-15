import React from "react";




function Card(props) {
    return (
   
      <div className="col s12 m3 l4">
       <div className="card grey darken-4 ">
        <div className=" card-image grey darken-4" >
        
        <img className="circle " width="200" height="200"  src={props.image}></img>
        
        </div>
  
        <div className="card-content  orange-text text-darken-4 ">
          <ul>
          {props.action}
      
          </ul>
        </div>
      


      </div>
      </div>
   
  
    );
  }
  
  export default Card;
  