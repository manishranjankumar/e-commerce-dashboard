import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, deleteProduct } from '../utils/localStorageHelpers';
import { toast } from 'react-toastify';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id);
    setProducts(getProducts());
    toast.success('Product deleted');
  };

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-1/2"
        />
        <Link to="/products/new" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Product
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
              {/* <th className="py-3 px-6 border">Image</th> */}
              <th className="py-3 px-6 border">Name</th>
              <th className="py-3 px-6 border">Price</th>
              <th className="py-3 px-6 border">Category</th>
              <th className="py-3 px-6 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="text-center border-t hover:bg-gray-50">
                {/* <td className="py-2 px-4 border">
                  <img src={p.imageUrl} alt={p.name} className="h-12 mx-auto" />
                </td> */}
                <td className="py-2 px-4 border">{p.name}</td>
                <td className="py-2 px-4 border">${p.price}</td>
                <td className="py-2 px-4 border">{p.category}</td>
                <td className="py-2 px-4 border space-x-2">
                  <Link to={`/products/${p.id}`} className="text-blue-500 hover:underline">
                    View
                  </Link>
                  <Link to={`/products/${p.id}/edit`} className="text-yellow-500 hover:underline">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(p.id)} className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;