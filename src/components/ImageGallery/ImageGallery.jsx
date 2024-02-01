import { ImageCard } from '../ImageCard/ImageCard.jsx';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(item => {
        return (
          <ImageCard
            key={item.id}
            description={item.description}
            imageRaw={item.urls.raw}
            imageSmall={item.urls.small}
          />
        );
      })}
    </ul>
  );
};
