import React, { useState } from "react";
import API from "../../utils/API";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

export default function Forms({
  query,
  handleFormSubmit,
  handleChange,
  redirect,
}) {
  if (redirect === true) {
    return <Redirect to="/results" />;
  }
  return (
    <div>
      <div
        className="row justify-content-center"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Giftastic</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter gif topic"
              name="query"
              value={query}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleFormSubmit}>
            Show me the gifs
          </Button>
        </Form>
      </div>
    </div>
  );
}
