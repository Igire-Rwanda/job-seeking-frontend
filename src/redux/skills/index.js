import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
  name: "skill",
  initialState: { skills: [], selectedSkill: {}, isFetching: false },
  reducers: {
    setSkills(state, action) {
      state.skills = action.payload?.data;
    },
    setSelectedSkill(state, action) {
      state.selectedSkill = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const skillActions = skillSlice.actions;

export default skillSlice.reducer;