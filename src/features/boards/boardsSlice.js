import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHidden: false,
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
    setHidden(state) {
      state.isHidden = true;
    },
    setVissible(state) {
      state.isHidden = false;
    },
    setActive(state, {payload}) {
      state.active = payload;
    }
  }
});

export const { setVissible, setHidden, setActive } = boardsSlice.actions;

export default boardsSlice.reducer;
