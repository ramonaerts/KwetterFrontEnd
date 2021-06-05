import { render, screen } from '@testing-library/react';
import Login from './src/pages/login';

test('simple-test', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});