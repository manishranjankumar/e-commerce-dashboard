import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'products';

export const getProducts = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const getProductById = (id) => {
  return getProducts().find((p) => p.id === id);
};

export const saveProduct = (product) => {
  const products = getProducts();
  if (product.id) {
    const idx = products.findIndex((p) => p.id === product.id);
    if (idx > -1) products[idx] = product;
  } else {
    product.id = uuidv4();
    product.createdAt = new Date().toISOString();
    products.push(product);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const deleteProduct = (id) => {
  const products = getProducts().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const seedDummyProducts = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    const dummy = [...Array(25)].map((_, i) => ({
      id: uuidv4(),
      name: `Product ${i + 1}`,
      description: `Description for Product ${i + 1}`,
      price: Math.floor(Math.random() * 500) + 50,
      category: i % 2 === 0 ? 'electronics' : 'clothing',
    //   imageUrl: 'https://via.placeholder.com/150',
      stockCount: Math.floor(Math.random() * 20) + 1,
      createdAt: new Date(Date.now() - i * 10000000).toISOString(),
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dummy));
  }
};