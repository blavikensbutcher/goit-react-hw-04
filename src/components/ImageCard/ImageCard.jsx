export const ImageCard = ({ description, imageSmall, imageRaw }) => {
  return (
    <li>
      <img src={imageSmall} width={333} height={250} alt={description} />
    </li>
  );
};
