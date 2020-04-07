import React from 'react';
import Navbar from './Components/NavBar';
import Container from "./Components/Gird/Container"
import {  Row, Col } from 'react-materialize';
import Card  from "./Components/Card"

function App() {
  return (
    <div className="App">
<Navbar></Navbar>

<br></br>


<Row>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</Row>
<Row>


<Container clase={"container col s3 m3 l3 orange darken-4 "}/>
<Container clase={"container col s3 m3 l3 blue darken-4"}/>
<Container clase={"container col s3 m3 l3 yellow"}/>
<Container clase={"container col s3 m3 l3 brown"}/>
<Container clase={"container col s3 m3 l3 white"}/>
<Container clase={"container col s3 m3 l3 red"}/>
<Container clase={"container col s3 m3 l3 purple"}/>
<Container clase={"container col s3 m3 l3 green"}/>


</Row>

<Row>
<Col
    className="card-panel grey "
    s={5}
  >
  <Container clase={"container "} texto={

<div>
  <ul >
<li>hi this is text</li>
<li>hi this is text</li>
<li>hi this is text about eheryre dknad anjdl dasdknasdnksad
  admkasdskmad
  adksamdamsdksad
  
</li>
<li>hi this is text</li>

</ul>
</div>
  }/>

 
  </Col>
  <Col
    className="card-panel grey darken-4 "
    s={2}
  />

  <Col
    className="card-panel black white-text"
    s={5}
  >
   <Container clase={"container "} texto={

<div>
  <ul>
<li>hi this is text</li>
<li>hi this is text</li>
<li>hi this is text about eheryre dknad anjdl dasdknasdnksad
  admkasdskmad
  adksamdamsdksad
  
</li>
<li>hi this is text</li>

</ul>
</div>
  }/>

  </Col>


  

</Row>




    </div>
  );
}

export default App;
