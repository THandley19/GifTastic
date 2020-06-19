import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function SearchResults({ gifs, handleClick }) {
  return (
    <div>
      <Container>
        <Row>
          {gifs.map((gifs) => (
            <Col xs={6} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={gifs.images.fixed_height.url} />
                <Card.Body>
                  <Card.Title>{gifs.title}</Card.Title>
                </Card.Body>
                <Button
                  variant="primary"
                  onClick={handleClick}
                  name={gifs.title}
                  value={gifs.images.fixed_height.url}
                  id={gifs._id}
                >
                  Favorite!
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
