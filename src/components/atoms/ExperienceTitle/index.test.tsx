import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import ExperienceTitle from './'

describe('ExperienceTitle component ', () => {
  it('- render', () => {
    render(<ExperienceTitle title='teste'/>);

    const titleNode = screen.getByText('teste');

    expect(titleNode).toBeInTheDocument();
  })
});