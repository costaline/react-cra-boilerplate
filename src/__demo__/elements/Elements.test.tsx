import React from 'react'
import { render, screen } from '@testing-library/react'

import { Elements } from './Elements'

test('renders info header', () => {
  render(<Elements />)

  const headerElement = screen.getByText(/Main features/i)

  expect(headerElement).toBeInTheDocument()
})
