import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { act } from 'react';
import App from './App';

test('renders learn react link', () => {
  act(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});