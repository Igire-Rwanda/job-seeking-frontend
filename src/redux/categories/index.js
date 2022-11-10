import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { categorys: [], selectedCategory: {}, isFetching: false },
  reducers: {
    setCategorys(state, action) {
      state.categorys = action.payload?.data;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;