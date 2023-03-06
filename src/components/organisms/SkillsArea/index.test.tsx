import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

import SkillsArea from './'

describe('SkillsArea component ', () => {
  it('- render', () => {
    render(
      <Provider store={store}>
        <SkillsArea skills={[]} title="teste" border/>
      </Provider>
    );

    const skillsAreaNode = screen.getByText('teste');

    expect(skillsAreaNode).toBeInTheDocument;
  })
});