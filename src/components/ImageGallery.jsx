import React from 'react';

const ImageGallery = () => {
  // Paths to images in the public folder
  const images = [
    '/images/search-aisum.jpg',  // Update these paths as needed
    '/images/summary.jpg'
  ];

  return (
    <>
    {/* <p>Step-1: Enter your URL <br />Step-2: Submit and Boom!</p> */}
    <div style={styles.imageGallery}>
      {images.map((src, index) => (
        <img 
          key={index} 
          src={src} 
          alt={`Image ${index + 1}`} 
          style={styles.image} 
        />
      ))}
    </div>
    </>
  );
};

const styles = {
  imageGallery: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  imageContainer: {
    width: '100%',
    maxWidth: '1200px', // Restrict max-width for very large screens
    margin: '0 auto', // Center the container
    padding: '0 20px', // Add padding on the sides
    boxSizing: 'border-box', // Ensure padding is included in the width
  },
  image: {
    width: '100%', // Image takes the full width of the container
    height: 'auto', // Maintain aspect ratio
    borderRadius: '10px', // Optional: Add rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
    marginBottom: '20px', // Space between images
  },
};

export default ImageGallery;
