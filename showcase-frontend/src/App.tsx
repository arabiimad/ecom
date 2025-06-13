import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './Components/Layout/RootLayout/RootLayout';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import CompanyPage from './Pages/CompanyPage';
import ContactPage from './Pages/ContactPage';
// It's good practice to have a general CSS file, even if initially empty or minimal.
// The original create-react-app App.css was deleted,
// but index.css is still present and usually imported in main.tsx or index.tsx.
// If component-specific styles are needed, they are in .module.css files.

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="contact" element={<ContactPage />} />
          {/* You can add a Not Found page here later */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
