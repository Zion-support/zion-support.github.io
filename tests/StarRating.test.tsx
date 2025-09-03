<<<<<<< HEAD
import: { render, screen } from '@testing-library/react';';
import: StarRating from '@/components/StarRating';';
=======
<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import StarRating from '@/components/StarRating';
>>>>>>> main

test('
  'rating 4.5 renders 4 full and 1 half star', () => {
<<<<<<< HEAD
=======
  render(<StarRating value={4.5} />);
  expect(screen.getAllByTestId('
  'full-star')).toHaveLength(4);
  expect(screen.getAllByTestId('
  'half-star')).toHaveLength(1)})
=======
import { render, screen } from '@testing-library/react'
import StarRating from '@/components/StarRating'
test(
<<<<<<< HEAD
  'rating: 4.5 renders 4 full and 1 half star', () => {';
  render(<StarRating: value={4.5} />);
=======
  'rating 4.5 renders 4 full and 1 half star', () => {
>>>>>>> main
  render(<StarRating value={4.5} />)
>>>>>>> main
  expect(screen.getAllByTestId(
  'full-star')).toHaveLength(4)';
  expect(screen.getAllByTestId(
<<<<<<< HEAD
  'half-star')).toHaveLength(1)})';
=======
  'half-star')).toHaveLength(1)})
>>>>>>> main
>>>>>>> main
