import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Bubble from './'

describe('Bubble component ', () => {
  it('- testing', () => {
    const { container } = render(
      <Bubble
        size='20px'
        left='10%'
        animationDelay='2s'
        animationDuration='10s'
        opacity={0.4} />
    );

    const bubbleNodes = container.getElementsByTagName('div');

    expect(bubbleNodes.length).toBe(1);
  })
});