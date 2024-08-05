import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react'; // React에서 act 가져오기
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
