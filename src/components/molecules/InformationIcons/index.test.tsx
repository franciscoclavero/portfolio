import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import InformationIcons from './'

describe('InformationIcons component ', () => {
  it('- render', () => {
    const { container } = render(<InformationIcons />);

    const divNodes = container.getElementsByTagName('div');

    expect(divNodes.length).toBe(3);
  })
});