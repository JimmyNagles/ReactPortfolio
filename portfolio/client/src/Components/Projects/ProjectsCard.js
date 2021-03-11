import React from "react";
import { Row } from "react-materialize";
import BookImg from "./Img/Book.jpg";
import FoodImg from "./Img/Food.jpg";
import StarUpImg from "./Img/StartUp.jpg";
import Onee from "./Img/onee.jpg";
import Twoo from "./Img/two.jpg";

import Card from "../Cards/Card";
//collaboration
const ProjectsCard = () => {
  return (
    <div>
      <br></br>
      <Row>
        <Card
          image={FoodImg}
          title={<h8>Vegan food Search</h8>}
          info={" Search for recipes of vegan food  "}
          tech={" React , Axios and Express Materialize"}
          link={"https://github.com/JimmyNagles/react-recipe-search"}
        />

        <Card
          image={StarUpImg}
          title={<h8>Open Book</h8>}
          info={" Freelance for gurus and experts"}
          tech={
            " Mongodb, Express, React, Node and Materialize."
          }
          link={"https://github.com/JimmyNagles/OpenBook"}
        />

        
<Card
          image={BookImg}
          title={<h8>Journal</h8>}
          info={" A place to leave thoughts and clear the mind "}
          tech={
            "Aws amplify, Aws app Sync,Graphql, React, Node.(work in progress)"
          }
          link={"https://github.com/JimmyNagles/CloudApp"}
          deploy={"https://master.dy5cznsin2vzo.amplifyapp.com/notes"}
        />
        <Card
          image={Onee}
          title={<h8>Kenko Farms</h8>}
          info={" Microgreens website  "}
          tech={
            "Aws amplify, Aws app Sync,Graphql, React, Node.(work in progress)"
          }
          link={"https://github.com/JimmyNagles/CloudApp"}
          deploy={"https://master.d1ml8elzef9lz3.amplifyapp.com/"}
        />

<Card
          image={Twoo}
          title={<h8>Guitarist</h8>}
          info={" Fabian'S Academy "}
          tech={
            "Aws amplify, Aws app Sync,Graphql, React, Node.(work in progress)"
          }
          link={"https://github.com/JimmyNagles/FabianGuitar"}
          deploy={"https://master.d3egej0e3wf87a.amplifyapp.com/"}
        />

      </Row>
    </div>
  );
};

export default ProjectsCard;
