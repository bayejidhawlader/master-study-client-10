import React from "react";
import { useLoaderData } from "react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const AllCourse = () => {
  const course = useLoaderData();
  const { picture, name, title, details, _id } = course;
  return (
    <div>
      <Card style={{}}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{title}</Card.Text>
          <p>{details}</p>
          <Button variant="danger">
            <Link to={`/details/${_id}`} className="text-white">
              Purchase This Courses
            </Link>{" "}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllCourse;
