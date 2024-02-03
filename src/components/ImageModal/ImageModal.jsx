import Modal from 'react-modal';
export const ImageModal = ({ modalIsOpen, closeModal, imageRegular }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={closeModal}>close</button>
      <img src={imageRegular} alt="cat" width={400} height={400} />
    </Modal>
  );
};
