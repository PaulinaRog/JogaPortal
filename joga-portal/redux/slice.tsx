import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayType: "tiles",
  styles: {
    list: "",
    tiles: "",
  },

};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setDisplayType(state, action) {
      state.displayType = action.payload;
    },
  },
});

export const { setDisplayType } = displaySlice.actions;

export default displaySlice.reducer;
