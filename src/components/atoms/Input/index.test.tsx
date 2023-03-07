import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Input from './'

describe('Input component ', () => {
  it('- render', () => {
    render(<Input name='name' placeholder='teste'/>);

    const inputNodes = screen.getByPlaceholderText('teste');

    expect(inputNodes).toBeInTheDocument;
  })
});