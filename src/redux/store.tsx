import { configureStore } from "@reduxjs/toolkit";

import skillsReducer from "./reducer/skillsReducer";

export const store = configureStore({
  reducer: {
    skills: skillsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;