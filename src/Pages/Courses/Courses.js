import { useLoaderData } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "./Cards";

const Courses = () => {
  const program = useLoaderData();

  return (
    <Container>
      <Row>
        <Col>
          {program.map((pro) => (
            <Cards key={pro.id} pro={pro}></Cards>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
