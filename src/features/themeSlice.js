import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeToggle",
  initialState: {
    theme: "dark",
  },
  reducers: {
    setLight: (state) => {
      state.theme = "light";
    },
    setDark: (state) => {
      state.theme = "dark";
    },
  },
});

export const { setDark, setLight } = themeSlice.actions;

export default themeSlice.reducer;
