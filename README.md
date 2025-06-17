# 🛒 E-Commerce Admin Dashboard (Frontend Only)

A simple, fully responsive e-commerce admin panel built with **React + Vite** and styled using **Tailwind CSS**. This version stores data in `localStorage`, making it perfect for frontend-only portfolios or interview tasks.

---

## ✨ Features

- 🔍 Product list with search and filter
- ➕ Add / ✏️ Edit / ❌ Delete products
- 📄 Product detail page
- ✅ Form validation
- 🔔 Toast notifications (via `react-toastify`)
- 🎨 Tailwind CSS styling
- 💾 Uses `localStorage` (no backend)

---

## 🛠️ Tech Stack

- React 18+
- Vite
- Tailwind CSS
- React Router DOM
- React Toastify
- UUID
- LocalStorage

---

## 📦 Installation

```bash
git clone https://github.com/your-username/ecommerce-dashboard.git
cd ecommerce-dashboard
npm install
npm run dev
```

[E-commerce-dashboard] (https://manishranjankumar.github.io/e-commerce-dashboard/)

---

## 🧪 Project Structure

```
.
├── index.html
├── package.json
├── postcss.config.cjs
├── tailwind.config.js
├── /src
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── /pages
│   │   ├── ProductList.jsx
│   │   ├── ProductDetail.jsx
│   │   └── ProductFormPage.jsx
│   └── /utils
│       └── localStorageHelpers.js
```

---

## 🧹 Reset Dummy Data

1. Open Developer Tools > Application > Local Storage
2. Delete the `products` key
3. Refresh the app

---

## 📃 License

This project is open for personal or educational use. Not intended for production without backend integration.
