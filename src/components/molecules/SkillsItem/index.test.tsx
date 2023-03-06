import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

import SkillsItem from './'

describe('SkillsItem component ', () => {
  it('- render', () => {
    const { container } = render(
      <Provider store={store}>
        <SkillsItem name='teste' props={[]} src="assets/icon/instagram.png"/>
      </Provider>
    );

    const skillsItemNode = container.getElementsByTagName('img');

    expect(skillsItemNode.length).toBe(1);
  })
});