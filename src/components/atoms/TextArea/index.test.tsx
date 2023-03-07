import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import TextArea from './'

describe('TextArea component ', () => {
  it('- render', () => {
    render(<TextArea placeholder='teste' name='teste'/>);

    const textArea = screen.getByPlaceholderText('teste');

    expect(textArea).toBeInTheDocument();
  })
});