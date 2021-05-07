import { GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import { getMangaLibrary } from "../../features/manga/getMangaLibrary";
import { AddLoliForm } from "../../features/lolis/components/AddLoliForm";

interface Props {
  firstName: string;
}

const LoliIndex: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      <AddLoliForm></AddLoliForm>
    </div>
  );
};

// Runs serverside code
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const manga_paths = getMangaLibrary();

  console.log(manga_paths);
  return {
    props: {
      firstName: "REIMU",
    },
  };
};

export default LoliIndex;
