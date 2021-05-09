import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('check first div text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Testing that tailwindcss is working!/i);
  expect(linkElement).toBeInTheDocument();
});
