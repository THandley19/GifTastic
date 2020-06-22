import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Header() {
  return (
    <Jumbotron>
      <div>
        <h1>Welcome to Giftastic!</h1>
        <p>
          In the search bar below, enter any topic that you would like to gifs
          about. You can even favorite them to view later!
        </p>
      </div>
    </Jumbotron>
  );
}
