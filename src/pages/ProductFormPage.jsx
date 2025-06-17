import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById, saveProduct } from '../utils/localStorageHelpers';
import { toast } from 'react-toastify';

const ProductFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stockCount: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (id) {
      const existing = getProductById(id);
      if (existing) setProduct(existing);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.category) {
      toast.error('Please fill in required fields');
      return;
    }
    saveProduct({ ...product, price: parseFloat(product.price), stockCount: parseInt(product.stockCount) });
    toast.success(id ? 'Product updated' : 'Product added');
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto bg-white p-6 rounded shadow-md">
      <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleChange} className="border p-2 w-full rounded" required />
      <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} className="border p-2 w-full rounded" />
      <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} className="border p-2 w-full rounded" required />
      <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} className="border p-2 w-full rounded" required />
      <input type="number" name="stockCount" placeholder="Stock Count" value={product.stockCount} onChange={handleChange} className="border p-2 w-full rounded" />
      {/* <input type="text" name="imageUrl" placeholder="Image URL" value={product.imageUrl} onChange={handleChange} className="border p-2 w-full rounded" /> */}
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        {id ? 'Update' : 'Add'} Product
      </button>
    </form>
  );
};

export default ProductFormPage;
