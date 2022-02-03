import { render, screen } from '@testing-library/react';
import App from './App';

test('renders exercise number', () => {
  render(<App />);
  const linkElement = screen.getByText(/2022-028/i);
  expect(linkElement).toBeInTheDocument();
});
