import { Dialog, DialogTitle } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { selectFocusedEntity, setFocused } from "../manga.slice";

export const MangaReaderModal: React.FunctionComponent = () => {
  const dispatch: AppDispatch = useDispatch();

  const focusedMangaEntity = useSelector(selectFocusedEntity);
  // console.log(focusedMangaEntity);

  const handleClose = () => {
    dispatch(setFocused({ id: -1, title: "", pages: 0, publicUrls: [] }));
  };

  const imagesRendered = focusedMangaEntity.publicUrls.map((url) => (
    <img src={url} width="100%"></img>
  ));

  return (
    <Dialog
      open={focusedMangaEntity.id !== -1}
      onClose={handleClose}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle>{focusedMangaEntity.title}</DialogTitle>
      {imagesRendered}
    </Dialog>
  );
};
