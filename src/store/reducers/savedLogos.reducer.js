import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const savedLogosSlice = createSlice({
  name: 'savedLogos',
  initialState,
  reducers: {
    setSavedLogos: (state, action) => {
      state.value = [action.payload];
    },
    resetSavedLogos: (state) => {
      state.value = [];
    },
  },
});

export const { setSavedLogos, resetSavedLogos } = savedLogosSlice.actions;
export default savedLogosSlice.reducer;
