import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page', () => {
  render(<App />);
  const header = screen.getByText(
    /Component to demonstrate barrel file structure/i
  );
  expect(header).toBeInTheDocument();
});
