import React from 'react';
import { render, screen }
from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders copyright information', () => {
    render(<Footer />);
    // Using a regex to match the copyright notice, as the year might change.
    // The \u00A9 is the copyright symbol ©
    const copyrightElement = screen.getByText(/© \d{4} ShowcaseApp. All rights reserved./i);
    expect(copyrightElement).toBeInTheDocument();
  });

  test('displays the current year in the copyright', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    // More specific check for the year
    const copyrightElement = screen.getByText(new RegExp(`© ${currentYear} ShowcaseApp\\. All rights reserved\\.`, 'i'));
    expect(copyrightElement).toBeInTheDocument();
  });
});
