import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userEmail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    setUserLogOut: (state, action) => {
      state.userName = null;
      state.userEmail = null;
    },
  },
});

export const { setActiveUser, setUserLogOut } = userSlice.actions;
export default userSlice.reducer;
