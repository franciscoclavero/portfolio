import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import BodyContent from '.'

describe('BodyContent component ', () => {
  it('- render', () => {
    render(<BodyContent />)

    const bodyContentNode = screen.getByText('AAAA');

    expect(bodyContentNode).toBeInTheDocument();
  })
});