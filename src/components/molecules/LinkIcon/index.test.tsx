import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import LinkIcon from './'

describe('LinkIcon component ', () => {
  it('- render', () => {
    const { container } = render(<LinkIcon height='24px' type='instagram' width='24px'/>);

    const abbrNodes = container.getElementsByTagName('abbr');
    const aNodes = container.getElementsByTagName('a');

    expect(abbrNodes.length).toBe(1);
    expect(aNodes.length).toBe(1);
  })
});