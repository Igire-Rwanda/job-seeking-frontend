import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { TableData: [], selectedProduct: {}, isFetching: false },
  reducers: {
    setTableData(state, action) {
      state.TableData = action.payload?.data;
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;