import { render, screen, waitFor} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';

import SkillsBallon from './'
import { setDisplay, setSkillList } from '../../../redux/reducer/skillsReducer';

describe('SkillsBallon component ', () => {
  it('- render', async () => {
    render(
      <Provider store={store}>
        <SkillsBallon />
      </Provider>
    );

    await waitFor(() => {
      store.dispatch(setDisplay('flex'));
      store.dispatch(setSkillList(['teste']));
    });

    const nodeBallon = screen.getByText('teste');
  
    expect(nodeBallon).toBeInTheDocument();
    
  })
});