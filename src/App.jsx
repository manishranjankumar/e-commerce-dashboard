import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import ProductFormPage from './pages/ProductFormPage';
import { ToastContainer } from 'react-toastify';
import { seedDummyProducts } from './utils/localStorageHelpers';

const App = () => {
  useEffect(() => {
    seedDummyProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/new" element={<ProductFormPage />} />
        <Route path="/products/:id/edit" element={<ProductFormPage />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;
