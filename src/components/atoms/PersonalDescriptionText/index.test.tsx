import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import PersonalDescriptionText from './'

describe('PersonalDescriptionText component ', () => {
  it('- render', () => {
    const { container } = render(
      <PersonalDescriptionText />
    );

    const personalNodes = container.getElementsByTagName('p');

    expect(personalNodes.length).toBe(1);
  })
});