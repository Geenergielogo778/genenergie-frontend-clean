import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  subscription: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggeInUser: (state, action) => {
      state.user = action.payload;
    },
    setLoggedInToken: (state, action) => {
      state.token = action.payload;
    },
    setSubscription: (state, action) => {
      state.subscription = action.payload;
    },
  },
});

export const { setLoggeInUser, setLoggedInToken, setSubscription } = userSlice.actions;

export default userSlice.reducer;
