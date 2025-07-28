import React, { useState } from 'react';
import axios from 'axios';
import imageCompression from 'browser-image-compression';


const ProductUpload = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages(prev => [...prev, ...selectedFiles]);
    if (images.length === 0) {
      setMainImageIndex(0);
    }
  };

  

const handleUpload = async () => {
  if (images.length === 0) return;

  setUploading(true);
  const uploadedImages = [];

  for (let i = 0; i < images.length; i++) {
    // 👉 Compress before upload
    const compressedFile = await imageCompression(images[i], {
      maxSizeMB: 0.2, // Approx 200 KB
      maxWidthOrHeight: 1024, // Resize dimensionally
      useWebWorker: true,
    });

    const formData = new FormData();
    formData.append("file", compressedFile); // Use compressed image
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData
    );

    uploadedImages.push(res.data.secure_url);
  }

  setUploading(false);
  console.log('Uploaded compressed images:', uploadedImages);
};


  return (
    <div className="max-w-2xl mx-auto p-4 border rounded shadow bg-white">
      <h2 className="text-2xl font-semibold mb-4">Upload Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      <textarea
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        rows={4}
      />

      {/* Custom Styled File Input */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Select Product Images</label>
        <label className="cursor-pointer inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
          Choose Files
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
        <p className="text-sm text-gray-500 mt-1">You can select images one by one or all at once</p>
      </div>

      {images.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Click to select Main Image</h3>
          <div className="flex gap-2 flex-wrap">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={URL.createObjectURL(img)}
                alt={`Preview ${idx}`}
                className={`w-20 h-20 object-cover border-2 ${
                  mainImageIndex === idx ? 'border-blue-500' : 'border-gray-300'
                } cursor-pointer`}
                onClick={() => setMainImageIndex(idx)}
              />
            ))}
          </div>
        </div>
      )}

      <button
        onClick={handleUpload}
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload Product'}
      </button>
    </div>
  );
};

export default ProductUpload;
