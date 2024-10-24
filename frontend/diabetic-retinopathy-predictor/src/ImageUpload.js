import React, { useState } from 'react';
import './ImageUpload.css';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Preview the image
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      setMessage('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage); // Append the image to the FormData

    try {
      const response = await fetch('http://localhost:5001/upload', {  // Updated port to 5001
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage('Image uploaded successfully!');
        setSelectedImage(null); // Reset the selected image
      } else {
        setMessage('Failed to upload the image.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Image Upload Page</h2>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
      />
      {selectedImage && <img src={selectedImage} alt="Selected" style={{ width: '200px', marginTop: '10px' }} />}
      <br />
      <button onClick={handleUpload}>Upload Image</button>
      <p>{message}</p>
    </div>
  );
};

export default ImageUpload;
