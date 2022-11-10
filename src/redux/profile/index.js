import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: { profiles: [], selectedProfile: {}, isFetching: false },
  reducers: {
    setProfiles(state, action) {
      state.profiles = action.payload?.data;
    },
    setSelectedprofile(state, action) {
      state.selectedProfile = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;