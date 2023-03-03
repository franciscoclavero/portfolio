import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import AnimationPersonalArea from './'

describe('AnimationPersonalArea component ', () => {
  it('- render', () => {
    const { container } = render(<AnimationPersonalArea />);

    const pNodes = container.getElementsByTagName('p');
    const divNodes = container.getElementsByTagName('div');

    expect(pNodes.length).toBe(1);
    expect(divNodes.length).toBe(4);
  })
});