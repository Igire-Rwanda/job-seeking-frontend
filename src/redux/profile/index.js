import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "create-profile",
  initialState: {profiles: [], selectedProfile: {}, isFetching: false },
  reducers: {
    setProfiles(state, action) {
      state.profiles=action.payload?.data;
      
      // state.token=action.payload?.data?.token;
    },
    setSelectedProfiles(state, action) {
      state.selectedProfile = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
