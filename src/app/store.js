import { configureStore } from '@reduxjs/toolkit';
import boards from "../features/boards/boardsSlice";
import boardsUI from '../features/boardsUI/boardsUISlice';

export const store = configureStore({
  reducer: {
    boards,
    boardsUI,
  },
});
