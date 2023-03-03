import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import InformationItems from './'

describe('InformationItems component ', () => {
  it('- render', () => {
    const { container } = render(<InformationItems title='teste' value='teste'/>)

    const divNodes = container.getElementsByTagName('div');

    expect(divNodes.length).toBe(3)
  })
});