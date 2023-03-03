import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHidden: false,
}

const boardsUISlice = createSlice({
  name: "boardsUI",
  initialState,
  reducers: {
    setHidden(state) {
      state.isHidden = true;
    },
    setVissible(state) {
      state.isHidden = false;
    },
  }
});

export const { setVissible, setHidden } = boardsUISlice.actions;

export default boardsUISlice.reducer;
