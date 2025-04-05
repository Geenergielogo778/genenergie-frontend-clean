import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    logoConcepts: [],
    selectedLogoConcept: null,
  },
};

export const generatedLogosSlice = createSlice({
  name: 'generatedLogos',
  initialState,
  reducers: {
    setLogoConcepts: (state, action) => {
      state.value.logoConcepts = [...action.payload, ...state.value.logoConcepts];
    },
    setSelectedLogoConcept: (state, action) => {
      state.value.selectedLogoConcept = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogoConcepts, setSelectedLogoConcept } = generatedLogosSlice.actions;

export default generatedLogosSlice.reducer;
