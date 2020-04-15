import React from 'react';
import NavBar from "./Components/Nav/NavBar"
import Card from './Components/Card/Card'
import { Container, Row, Col } from 'react-materialize';
import Form from './Components/Form/form'


function App() {
  return (
    <div className="App">

  <NavBar/>
<br/>


<Container>
  {/* title row */}
<Row className="orange darken-4">
  <h2 className="center-align">Group Projects</h2>

</Row>

{/* card row */}
<Row className="grey darken-4">

<Card action={<h5>Recepie Finder</h5>}/>
<Card action={<h5>Tatt-it</h5>}/>
<Card action={<h5>MP</h5>}/>

</Row>
</Container>





<Container>
  {/* title row */}
<Row className="orange darken-4">
  <h2 className="center-align">Personal Projects</h2>

</Row>

  <Row>

<Card action={<h5>Burger SQL</h5>}/>
<Card action={<h5>News Scrapper mangodb</h5>}/>
<Card action={<h5>Rock Paper Scissors </h5>}/>


  </Row>


</Container>





<Container>

 {/*title row  */}
<Row className="orange darken-4">
  <h2 className="center-align">Contact Information</h2>


</Row>

{/* form row */}

<Form></Form>





</Container>




 

 
  
  
    </div>
  );
}

export default App;

