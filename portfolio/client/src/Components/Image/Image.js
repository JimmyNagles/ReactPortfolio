import React from "react";
import { Card, Icon, CardTitle } from "react-materialize";
import Photo from "./Me.jpeg";
const Image = () => {
  return (
    <div>
      <Card
        className="responsive-img transparent "
      
      >
        <img className="responsive-img circle" src={Photo}></img>
      </Card>
    </div>
  );
};

export default Image;
