import { Card, CardHeader } from "@material-ui/core";
import { Manga } from "../manga.slice";

interface Props {
  manga: Manga;
}

export const MangaCard: React.FunctionComponent<Props> = ({ manga }) => {
  return (
    <Card>
      <CardHeader title={manga.title} subheader="Added Today"></CardHeader>
      <img src={manga.publicUrls[0]} alt={manga.id.toString()}></img>
    </Card>
  );
};
