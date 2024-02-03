import css from './ImageCard.module.css';
import { ImageModal } from '../ImageModal/ImageModal.jsx';
export const ImageCard = ({
  description,
  imageSmall,
  openModal,
  modalIsOpen,
  closeModal,
  imageRegular,
}) => {
  return (
    <li className={css.item}>
      <img src={imageSmall} width={330} height={200} alt={description} onClick={openModal} />
      <ImageModal closeModal={closeModal} modalIsOpen={modalIsOpen} imageRegular={imageRegular} />
    </li>
  );
};
