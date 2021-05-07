import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectMangaEntities } from "../manga.slice";
import { MangaCard } from "./MangaCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  })
);

export const MangaCardList: React.FunctionComponent = () => {
  const mangaEntities = useSelector(selectMangaEntities);
  const mangaEntitiesRender = mangaEntities.map((mangaEntity) => (
    <Grid item xs={12} md={4}>
      <MangaCard manga={mangaEntity}></MangaCard>
    </Grid>
  ));

  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={3}>
      {mangaEntitiesRender}
    </Grid>
  );
};
