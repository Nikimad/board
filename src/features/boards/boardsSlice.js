import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vissible: true,
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
    setVissible(state) {
      state.vissible = !state.vissible;
    },
    setActive(state, {payload}) {
      state.active = payload;
    }
  }
});

export const { setVissible, setActive } = boardsSlice.actions;

export default boardsSlice.reducer;
