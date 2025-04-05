import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  limit: 0,
};

const limitSlice = createSlice({
  name: 'limit',
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const { setLimit } = limitSlice.actions;
export default limitSlice.reducer;
