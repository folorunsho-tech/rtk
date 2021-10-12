import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
  name: "theme",
  initialState: { value: "light" },
  reducers: {
    setLight: (state) => {
      state.value = "light";
    },
    setDark: (state) => {
      state.value = "dark";
    },
  },
});
export const { setDark, setLight } = themeSlice.actions;
export default themeSlice.reducer;
