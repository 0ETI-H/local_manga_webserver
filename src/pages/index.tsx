import { GetServerSideProps, GetStaticProps } from "next";
import { Manga, setEntities } from "../features/manga/manga.slice";

import path from "path";
import fs from "fs";
import { MangaCardList } from "../features/manga/components/MangaCardList";
import { useEffect } from "react";
import { AppDispath } from "../app/store";
import { useDispatch } from "react-redux";
interface Props {
  manga: Manga[];
}

const Home: React.FunctionComponent<Props> = ({ manga }) => {
  const dispatch: AppDispath = useDispatch();

  useEffect(() => {
    dispatch(setEntities(manga));
  }, []);

  return (
    <div>
      <MangaCardList></MangaCardList>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const MANGA_DIR =
    "/Users/elim-mbp-01/Documents/projects/local_manga_reader/public/manga";
  const manga_titles = fs.readdirSync(MANGA_DIR);

  const manga: Manga[] = manga_titles.map((mangaTitle, index) => {
    // Get manga path to search for images in filesystem
    const mangaPath = path.join(MANGA_DIR, mangaTitle);

    // Read all contents of dir, filtering those that have an image filetype
    const imageNames = fs
      .readdirSync(mangaPath)
      .filter(
        (imageName) => imageName.endsWith(".png") || imageName.endsWith(".jpg")
      );

    // Sort images in order
    const imageNamesSorted = imageNames.sort((im1, im2) => {
      const num1 = parseInt(im1.split(".")[0]);
      const num2 = parseInt(im2.split(".")[0]);

      if (num1 > num2) {
        return 1;
      } else if (num1 < num2) {
        return -1;
      } else {
        return 0;
      }
    });

    // Public URLs
    const publicUrls = imageNamesSorted.map(
      (name) => `/manga/${mangaTitle}/${name}`
    );

    return {
      id: index,
      title: mangaTitle,
      pages: imageNamesSorted.length,
      publicUrls,
    };
  });

  return {
    props: {
      manga,
    },
  };
};
