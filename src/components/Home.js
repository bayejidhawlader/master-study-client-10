import React from "react";

import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <div>
      <>
        <Card className="px-5">
          <Card.Img
            variant="top"
            src="https://i.postimg.cc/T3VwdmhS/banner-6e0ce86940b55e1bcbc0.png"
          />
          <Card.Body className="text-center">
            <Card.Title>Discover the most exciting online course</Card.Title>
            <Card.Text>
              SkillUp has all the trendy and demanding courses in today's world.
              Our lab has all the necessary computer configurations required for
              the course. You can sit in the lab after the class and practice
              anything related to the course. Each course is designed in such a
              way that you have the confidence to work on each topic at the end
              of the course.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </>
    </div>
  );
};

export default Home;
