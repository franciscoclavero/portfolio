import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'SkillsBallon',
  initialState: {
    top: 0,
    left: 0,
    display: 'none',
    skillList: []
  },
  reducers: {
    setTop: (state, action) => {
      state.top = action.payload;
    },
    setLeft: (state, action) => {
      state.left = action.payload;
    },
    setDisplay: (state, action) => {
      state.display = action.payload;
    },
    setSkillList: (state, action) => {
      state.skillList = action.payload;
    }
  }
});

export const { setTop, setLeft, setDisplay, setSkillList } = slice.actions;

export default slice.reducer;