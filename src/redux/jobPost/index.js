import { createSlice } from "@reduxjs/toolkit";

const jobPostSlice = createSlice({
  name: "jobPost",
  initialState: { jobPosts: [], selectedJobPost: {}, isFetching: false },
  reducers: {
    setJobPosts(state, action) {
      state.jobPosts = action.payload?.data;
    },
    setSelectedJobPost(state, action) {
      state.selectedJobPost = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const jobPostActions = jobPostSlice.actions;

export default jobPostSlice.reducer;