import React from 'react';
import Navbar from './Components/Nav/NavBar';
import Container from "./Components/Gird/Container"
import {  Row, Col, Parallax } from 'react-materialize';
import Card from './Components/Card/Card'



function App() {
  return (
    <div className="App">


      <Navbar/>

<div>
  <Parallax
    image={<img alt="" src="http://materializecss.com/images/parallax1.jpg"/>}
    options={{
      responsiveThreshold: 0
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
    image={<img alt="" src="http://materializecss.com/images/parallax2.jpg"/>}
    options={{
      responsiveThreshold: 0
    }}
  />
</div>

    </div>
  );
}

export default App;
