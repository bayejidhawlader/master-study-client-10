import React from "react";
import { useLoaderData } from "react-router";
import Card from "react-bootstrap/Card";

const Details = () => {
  const course = useLoaderData();
  const { name, title, picture, details } = course;
  return (
    <div>
      <Card style={{ width: "50rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{title}</Card.Text>
          <p>{details}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
