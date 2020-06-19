import React, { Component } from "react";
import API from "../utils/API";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class SavedGifs extends Component {
  state = {
    gifs: [],
  };

  componentDidMount = () => {
    API.getSavedGifs()
      .then((res) =>
        this.setState({
          gifs: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  handleDelete = (event) => {
    API.deleteGif(event.target.id)
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.state.gifs);
    return (
      <Container>
        {this.state.gifs.length > 0 ? (
          <h1>Your Saved Gifs:</h1>
        ) : (
          <h1>No Saved Gifs</h1>
        )}

        <Row>
          {this.state.gifs.map((gifs) => (
            <Col xs={6} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={gifs.url} />
                <Card.Body>
                  <Card.Title>{gifs.name}</Card.Title>
                  <Card.Title>Saved on: {gifs.date}</Card.Title>
                </Card.Body>
                <Button
                  variant="primary"
                  onClick={this.handleDelete}
                  name={gifs.title}
                  id={gifs._id}
                >
                  Delete
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
