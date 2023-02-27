import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: "platform",
  platform: {
    name: "Platform Launch",
  },
  marketing: {
    name: "Marketing Plan",
  },
  roadmap: {
    name: "Roadmap"
  }
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
