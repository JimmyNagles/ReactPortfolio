import React from 'react';
import Navbar from './Components/Nav/NavBar';
import Container from "./Components/Gird/Container"
import {  Row, Col, Parallax } from 'react-materialize';
import Card from './Components/Card/Card'
import Img1 from "./css/img/Img1.jpg"
import Img2 from "./css/img/Img2.jpg"



function App() {
  return (
    <div className="App">


      <Navbar/>

<div>
  <Parallax
    image={<img alt="" src={Img1}/>}
    options={{
      responsiveThreshold: 9
    }}
  />
  <div className="section black">
    <div className="row container ">
      <h2 className="header">
        Work
      </h2>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

      
    </div>


  </div>
  <Parallax
    image={<img alt="" src={Img1}/>}
    options={{
      responsiveThreshold: 9
    }}
  />

</div>


<div>
  <Parallax
    image={<img alt="" src={Img1}/>}
    options={{
      responsiveThreshold: 9
    }}
  />
  <div className="section black">
    <div className="row container ">
      <h2 className="header">
        Work
      </h2>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

      
    </div>


  </div>
  <Parallax
    image={<img alt="" src={Img1}/>}
    options={{
      responsiveThreshold: 9
    }}
  />

</div>




    </div>
  );
}

export default App;
