import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import {
  Favorite,
  MoreVert,
  ThumbDown,
  ThumbsUpDown,
  ThumbUp,
} from "@material-ui/icons";
import { Manga } from "../manga.slice";

interface Props {
  manga: Manga;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    media: {
      height: 350,
      paddingTop: "56.25%",
    },
  })
);

export const MangaCard: React.FunctionComponent<Props> = ({ manga }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        {/* <CardHeader
        title={manga.title}
        subheader="Added Today"
        action={
          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>
        }
      ></CardHeader> */}
        <CardMedia
          className={classes.media}
          title="thumbnail"
          image={manga.publicUrls[0]}
        ></CardMedia>
        <CardHeader title={manga.title}></CardHeader>
      </CardActionArea>
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
    </Card>
  );
};
