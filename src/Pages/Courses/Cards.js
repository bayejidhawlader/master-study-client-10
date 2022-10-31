import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Cards.css";
const Cards = ({ pro }) => {
  const { name, picture, title, _id } = pro;
  console.log(pro);
  return (
    <Container className="">
      <Row className="mb-4">
        <Col className="d-none d-lg-block border border-2">
          <h3>{name}</h3>
          <p>{title}</p>
        </Col>
        <Col className="cards m-auto">
          <Card style={{ width: "50rem" }}>
            <Card.Img variant="top" src={picture} />

            <Card.Title>{name}</Card.Title>
            <Card.Text>{title}</Card.Text>

            <button className="btn btn-danger">
              <Link to={`/program/${_id}`} className="text-white">
                See Details
              </Link>
            </button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
