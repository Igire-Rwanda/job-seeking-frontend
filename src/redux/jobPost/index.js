import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name:"create-job",
  initialState: {job:{}, isFetching: false },
  reducers: {
    createJob(state, action) {
   
      state.job=action?.payload?.data;
    },

    setIsFetching(state, action) {
      state.isFetching = action.payload;
    }
  },
});

export const jobActions = jobSlice.actions;

export default jobSlice.reducer;