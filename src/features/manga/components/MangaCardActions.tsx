import { CardActions, Grid, IconButton } from "@material-ui/core";
import { ThumbUp, ThumbDown, Favorite } from "@material-ui/icons";
import React from "react";

export const MangaCardActions: React.FunctionComponent = () => {
  return (
    <CardActions>
      <Grid container>
        <Grid item>
          <IconButton>
            <ThumbUp></ThumbUp>
          </IconButton>
        </Grid>
        <Grid item style={{ flexGrow: 1 }}>
          <IconButton>
            <ThumbDown></ThumbDown>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <Favorite></Favorite>
          </IconButton>
        </Grid>
      </Grid>
    </CardActions>
  );
};
