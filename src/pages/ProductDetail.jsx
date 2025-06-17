import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../utils/localStorageHelpers';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) return <p className="text-red-500">Product not found.</p>;

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      {/* <img src={product.imageUrl} alt={product.name} className="mb-4 w-48 h-48 object-cover" /> */}
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Stock Count:</strong> {product.stockCount}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Created At:</strong> {new Date(product.createdAt).toLocaleString()}</p>
      <Link
        to={`/products/${product.id}/edit`}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Edit Product
      </Link>
    </div>
  );
};

export default ProductDetail;