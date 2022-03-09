import React from 'react'
import { render, screen } from '@testing-library/react'

import Component from './_'

test('renders info header', () => {
  render(<Component />)

  const headerElement = screen.getByText(/Main features/i)

  expect(headerElement).toBeInTheDocument()
})
