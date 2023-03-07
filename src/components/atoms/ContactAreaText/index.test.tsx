import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import ContactAreaText from './'

describe('ContactAreaText component ', () => {
  it('- render', () => {
    render(<ContactAreaText align='right' text='areaText'/>);

    const nodeContactArea = screen.getByText('areaText');

    expect(nodeContactArea).toBeInTheDocument();
  })
});