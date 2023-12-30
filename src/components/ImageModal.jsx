import React from 'react';
import '../styles/ImageModal.css';

const ImageModal = ({ images, currentImage, setCurrentImage, closeModal }) => {
  const nextImage = () => {
    const newIndex = currentImage < images.length - 1 ? currentImage + 1 : 0;
    setCurrentImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = currentImage > 0 ? currentImage - 1 : images.length - 1;
    setCurrentImage(newIndex);
  };

  return (
    <div className="modal-background">
      <div className="modal-content">
        <img src={images[currentImage]} alt={`image-${currentImage}`} />
        <div className="modal-navigation">
          <button className="modal-button" onClick={prevImage}>Prev</button>
          <button className="modal-button" onClick={nextImage}>Next</button>
        </div>
        <button className="modal-button close-button" onClick={closeModal}>X</button>
      </div>
    </div>
  );
};

export default ImageModal;
