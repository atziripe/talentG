import React from 'react';
import { render, screen } from '@testing-library/react' 

test('should show login form', () => {
  render(<Login />)
  const input = screen.query
  // Events and assertions...
})