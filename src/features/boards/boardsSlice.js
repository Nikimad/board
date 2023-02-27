import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: "Platform Launch"
}

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setActive(state, {payload}) {
      state.active = payload;
    }
  }
});

export const { setActive } = boardsSlice.actions;

export default boardsSlice.reducer;
