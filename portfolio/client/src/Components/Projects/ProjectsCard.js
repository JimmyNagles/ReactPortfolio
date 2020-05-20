import React from "react";
import { Row } from "react-materialize";
import BookImg from "./Img/Book.jpg";
import FoodImg from "./Img/Food.jpg";
import StarUpImg from "./Img/StartUp.jpg";

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
          info={" Search for recipes of vegan food online "}
          tech={" React , Axios and Express Materialize"}
          link={"https://github.com/JimmyNagles/react-recipe-search"}
        />

        <Card
          image={StarUpImg}
          title={<h8>Open Book</h8>}
          info={" Freelance for gurus and experts in any field"}
          tech={
            " Mongodb, Express, React, Node and Materialize.(work in progress)"
          }
          link={"https://github.com/JimmyNagles/OpenBook"}
        />
        <Card
          image={BookImg}
          title={<h8>Google Books</h8>}
          info={" Search for books on googles API and save them  "}
          tech={" Mongodb, Express, React, Node.(work in progress)"}
          link={"https://github.com/JimmyNagles/GoogleBooks"}
        />
      </Row>
    </div>
  );
};

export default ProjectsCard;
