import React, { useState } from "react";
import API from "../../utils/API";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

export default function Form() {
  const [query, setquery] = useState("");
  const [gifs, setgifs] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.getGifs(query)
      .then((res) => setgifs(res.data.data))
      .catch((err) => console.log(err));
    setquery("");
  };

  const handleClick = (event) => {
    const { name, value } = event.target;
    API.saveGifs({
      name: name,
      url: value,
    })
      .then((res) => alert("Gif saved successfully!"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="enter text"
          name="query"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input type="submit" onClick={handleFormSubmit} />
      </form>
      <Container>
        <Row>
          {gifs.map((gifs) => (
            <Col xs={6} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={gifs.images.fixed_height.url} />
                <Card.Body>
                  <Card.Title>Click me to save gif!</Card.Title>
                </Card.Body>
                <Button
                  variant="primary"
                  onClick={handleClick}
                  name={gifs.title}
                  value={gifs.images.fixed_height.url}
                  id={gifs.id}
                >
                  Save
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
