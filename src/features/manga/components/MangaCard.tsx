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
import { MoreVert } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { Manga, setFocused } from "../manga.slice";
import { MangaCardActions } from "./MangaCardActions";

interface Props {
  manga: Manga;
}

const useStyles = makeStyles((theme: Theme) => createStyles({}));

export const MangaCard: React.FunctionComponent<Props> = ({ manga }) => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    dispatch(setFocused(manga));
  };

  return (
    <Card variant="outlined">
      <CardActionArea onClick={handleClick}>
        {/* Note, images are much easier to work with than background images. You can set width to 100% and height auto-adjusts */}
        {/* Ideal when you want to constrain and display the entire image. If you care about uniformity, you can opt to use a background image */}
        {/* background-size: cover; does a really nice job @ that. Won't see entire image however. That is the tradeoff*/}
        <CardMedia component="img" src={manga.publicUrls[0]}></CardMedia>
        <CardHeader title={manga.title} subheader="Added Today"></CardHeader>
      </CardActionArea>
      {/* <MangaCardActions></MangaCardActions> */}
    </Card>
  );
};
