import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import BubbleArea from './'

describe('BubbleArea component ', () => {
  it('- render', () => {
    const { container } = render(<BubbleArea />);

    const divNodes = container.getElementsByTagName('div');

    expect(divNodes.length).toBe(9);
  })
});