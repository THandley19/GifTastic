import React, { useState } from "react";
import API from "../../utils/API";
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
      <Form>
        <div className="container">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter a topic to search! Ex. Baseball, Food, Dogs"
              name="query"
              value={query}
              onChange={handleChange}
              size="lg"
              className="search-bar"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={handleFormSubmit}
            size="lg"
          >
            Show me the gifs
          </Button>
        </div>
      </Form>
    </div>
  );
}
