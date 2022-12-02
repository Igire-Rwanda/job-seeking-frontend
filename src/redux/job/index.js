import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name:"create-job",
  initialState: { token: "", job:{}, isFetching: false },
  reducers: {
    createJob(state, action) {
      state.token=action?.payload?.data?.token;
      state.job=action?.payload?.data;
    },
   
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    }
  },
});

export const jobActions = jobSlice.actions;

export default jobSlice.reducer;