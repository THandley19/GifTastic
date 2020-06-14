import React, { useState } from "react";
import API from "../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Form() {
  const classes = useStyles();
  const [query, setquery] = useState("");
  const [gifs, setgifs] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.getGifs(query)
      .then((res) => setgifs(res.data.data))
      .catch((err) => console.log(err));
    setquery("");
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
      <Container
        component="main"
        maxWidth="xs"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {gifs.map((gifs) => (
          <div style={{}}>
            <Card
              className={classes.root}
              style={{
                marginTop: 30,
                marginLeft: 35,
                width: 400,
              }}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={gifs.images.fixed_height.url}
                  title={gifs.title}
                  style={{
                    height: 400,
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {gifs.title}
                  </Typography>
                  {gifs.username ? (
                    <Typography gutterBottom variant="h5" component="h2">
                      Created by: {gifs.username}
                    </Typography>
                  ) : (
                    <Typography gutterBottom variant="h5" component="h2">
                      Unknown Author
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a href={gifs.url}>View Gif</a>
              </CardActions>
            </Card>
          </div>
        ))}
      </Container>
    </div>
  );
}
