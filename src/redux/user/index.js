import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "create-user",
  initialState: {users:[], selectedUser: {}, isFetching: false },
  reducers: {
    setUsers(state, action) {
      state.users = action?.payload?.data;
    },
    setSelectedUser(state, action) {
      state.selectedUser = action?.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action?.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;