import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const componente = render(<App />);
  expect(componente).toBeDefined();
});
// test('renders 3 liest items', () => {
//   render(<App />);
//   const listItem = screen.getAllByRole("listitem");
//   expect(listItem).toHaveLength(3);
// });
