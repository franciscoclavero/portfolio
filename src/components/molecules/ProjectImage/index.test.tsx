import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import ProjectImage from './'

describe('ProjectImage component ', () => {
  it('- render', async () => {
    const { container } = render(<ProjectImage name='teste' src='assets/images/user-table.png' url='www.google.com'/>);

    fireEvent.mouseEnter(container.getElementsByTagName('a')[0]);

    const projectNode = screen.getByText('teste');

    expect(projectNode).toBeInTheDocument
  })
});