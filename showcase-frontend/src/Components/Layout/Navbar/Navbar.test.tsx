import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Navbar uses <Link>
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('renders ShowcaseApp logo/brand name', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const brandElement = screen.getByText(/ShowcaseApp/i);
    expect(brandElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Products/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Company/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
  });

  test('Home link points to "/"', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const homeLink = screen.getByRole('link', { name: /Home/i });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  test('Products link points to "/products"', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const productsLink = screen.getByRole('link', { name: /Products/i });
    expect(productsLink).toHaveAttribute('href', '/products');
  });
});
