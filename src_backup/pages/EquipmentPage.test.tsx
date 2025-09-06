import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EquipmentPage from './EquipmentPage';
describe('EquipmentPage', () => {
  it('renders equipment page correctly', () => {
    render(
      <MemoryRouter>
        <EquipmentPage />
      </MemoryRouter>
    );
    expect(screen.getByText('Equipment')).toBeInTheDocument();
  });
});