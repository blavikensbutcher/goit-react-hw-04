import { ImageCard } from '../ImageCard/ImageCard.jsx';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ data, openModal, closeModal, modalIsOpen }) => {
  return (
    <ul className={css.list}>
      {data.map(item => {
        return (
          <ImageCard
            key={item.id}
            description={item.alt_description}
            imageRegular={item.urls.regular}
            imageSmall={item.urls.small}
            openModal={openModal}
            closeModal={closeModal}
            modalIsOpen={modalIsOpen}
          />
        );
      })}
    </ul>
  );
};
