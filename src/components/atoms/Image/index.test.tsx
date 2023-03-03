import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Image from './'

describe('Image component ', () => {
  it('- render', () => {
    const { container } = render(
      <Image height='24px' width='24px' src='assets/icons/instagram.png'/>
    );

    const imageNodes = container.getElementsByTagName('img');

    expect(imageNodes.length).toBe(1);
  })
});