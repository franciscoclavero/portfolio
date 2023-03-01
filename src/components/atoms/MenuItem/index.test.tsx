import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import MenuItem from './'

describe('MenuItem component ', () => {
  it('- render', () => {
    render(<MenuItem contentText='teste'/>)

    const itemNode = screen.getByText('teste');

    expect(itemNode).toBeInTheDocument()
  })
});