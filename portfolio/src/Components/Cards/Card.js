import React from 'react'

export default function Card(props) {
    return (
        <div>
            
 
    <div class="col s12 m6 l3">
      <div class="card-small trasnparent">

      <div class="card-image">
          <img  width="250" height="250" src={props.image}></img>
        </div>

          <span class="card-title white-text">{props.title}</span>
        <div class="card-content  white-text">
       
          {props.info}
        </div>
        <div class="card-action">
          <a className="orange-text" href={props.link}>github</a>
          
        </div>
      </div>
    </div>
  
        </div>
    )
}
