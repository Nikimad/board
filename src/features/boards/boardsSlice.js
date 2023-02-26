import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const boardsAdapter = createEntityAdapter();

const boardsSlice = createSlice({
  name: "boards",
  initialState: boardsAdapter.getInitialState(),
  reducers: {
    boardAdd(state, { payload }) {
      return boardsAdapter.addOne(state, {
        name: payload,
        tasks: [],
        id: Date.now(),
      });
    },
    }
});

export const boardsSelectors = boardsAdapter.getSelectors((state) => state.boards);

export const { boardAdd } = boardsSlice.actions;

export default boardsSlice.reducer;
