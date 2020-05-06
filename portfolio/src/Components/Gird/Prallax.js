import React from 'react'
import  Parallax  from 'react-materialize';
import Img1 from '../../css/img/Img1.jpg'
import Img2 from '../../css/img/Img2.jpg'


const Prallax = (props) =>{
   
        return (

          <div>

          <Parallax
            image={Img1}
            options={{
              responsiveThreshold: 0
            }}
          />
          <div className="section white">
            <div className="row container">
              <h2 className="header">
                Parallax
              </h2>
              <p className="grey-text text-darken-3 lighten-3">
                Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
              </p>
            </div>
          </div>
          <Parallax
            image={Img2}
            options={{
              responsiveThreshold: 0
            }}
          />


        </div>
        )
    
}


export default Prallax
