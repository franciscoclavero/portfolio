import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import SkillsBallonItem from './'

describe('SkillsBallonItem component ', () => {
  it('- render', () => {
    render(<SkillsBallonItem contentText='teste'/>);

    const nodeBallonItem = screen.getByText('teste');

    expect(nodeBallonItem).toBeInTheDocument();
  })
});