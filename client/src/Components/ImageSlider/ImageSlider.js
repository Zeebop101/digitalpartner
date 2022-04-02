import React, { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import './ImageSlider.css';
import 'react-image-gallery/styles/css/image-gallery.css';

const ImageSlider = ({ bookImages }) => {
  return (
    <div style={{ width: '150px', height: '250px' }}>
      <ImageGallery
        items={bookImages.map((bookImage) => {
          return {
            original: bookImage,
            originalHeight: '250px',
            originalWidth: '150px',
          };
        })}
        showNav={true}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </div>
  );
};

export default ImageSlider;
