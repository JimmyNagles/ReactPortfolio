import React from 'react'

export default function Card(props) {
    return (
        <div>
            
 
    <div class="col s12 m6 l3">
      <div class="card-medium trasnparent">

      <div class="card-image">
          <img src={props.image}></img>
          <span class="card-title">{props.title}</span>
        </div>

        <div class="card-content white-text">
       
          {props.info}
        </div>
        <div class="card-action">
          <a href={props.link}>Github</a>
          
        </div>
      </div>
    </div>
  
        </div>
    )
}
