import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: 1,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Login: (state, { payload }) => {},
    Logout: (state, { payload }) => {},
  },
});

export const { Login, Logout } = userSlice.actions;

export default userSlice.reducer;
