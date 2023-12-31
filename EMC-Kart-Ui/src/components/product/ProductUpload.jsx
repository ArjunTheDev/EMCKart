// src/components/Modal.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../store/productStore';
import { Alert } from 'antd';

const ProductUpload = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    imagePath: null,
  });
  const [productImage, setProductImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [successFlag, setSuccessFlag] = useState(false);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state) => state.product)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    try {
      dispatch(createProduct({productImage, formData})).then((response) => {
        setSuccessFlag(true)
        setMessage("Product uploaded successfully")
        setFormData({
          title: '',
          description: '',
          price: '',
          imagePath: null,
        })
        setPreviewImage(null)
      })
    } catch (err) {
      console.error(err)
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
      <div className="modal-container bg-white w-96 mx-auto mt-24 p-4 rounded shadow">
        <h3 className="text-lg text-gray-800 font-bold text-center mb-3">Product Upload</h3>
        {successFlag && <Alert message={message} type="success" showIcon closable />}
        {error && <Alert message={error} type="error" showIcon closable />}
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />

          <label htmlFor="description" className="block mt-2 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>

          <label htmlFor="price" className="block mt-2 text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />

          <label htmlFor="image" className="block mt-2 text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {previewImage && (
            <div>
              <label htmlFor="imagePreview" className="block mt-2 text-sm font-medium text-gray-700">
              Preview
              </label>
              <img
                src={previewImage}
                alt="Preview"
                className="max-w-full h-auto mb-4 rounded"
              />
            </div>
          )}          
        </form>
        <div className="flex items-center justify-center">
          <button 
            type="submit"
            className="mt-4 bg-blue-500 text-white p-2 rounded-md text-center"
            onClick={() => handleSubmit()}
            disabled={loading}
          >
            { loading ? "Uploading..." : "Upload" }
          </button>
        </div>
      </div>
  );
};

export default ProductUpload;
