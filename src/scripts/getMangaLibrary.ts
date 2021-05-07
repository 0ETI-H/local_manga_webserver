import fs from "fs";

const MANGA_DIR =
  "/Users/elim-mbp-01/Documents/projects/local_manga_reader/public/manga";

interface Manga {
  title: string;
}

export const getMangaLibrary = () => {
  const manga_paths = fs.readdirSync(MANGA_DIR);
  return manga_paths;
};
