import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "application",
  initialState: { applications: [], selectedApplication: {}, isFetching: false },
  reducers: {
    setApplications(state, action) {
      state.applications = action.payload?.data;
    },
    setSelectedApplication(state, action) {
      state.selectedApplication = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const applicationActions = applicationSlice.actions;

export default applicationSlice.reducer;