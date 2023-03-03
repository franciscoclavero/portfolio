import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import ExperienceItem from './'

describe('ExperienceItem component ', () => {
  it('- render', () => {
    const data = {
      'period': '2020 - 2021',
      'mainTitle': 'Ciência da Computação',
      'subTitle': 'Unoesc São Miguel',
      'description': 'Cursado Bacharelado por 3 anos.'
    };

    render(<ExperienceItem data={data} />)

    const itemNode = screen.getByText('Ciência da Computação');

    expect(itemNode).toBeInTheDocument()
  })
});