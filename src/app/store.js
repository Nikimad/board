import { configureStore } from '@reduxjs/toolkit';
import boards from "../features/boards/boardsSlice";

export const store = configureStore({
  reducer: {
    boards,
  },
});
