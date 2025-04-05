import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    step: 0,
    logoTitle: null,
    logoTagline: null,
    logoKeywords: [],
    logoDesigner: [],
    logoColours: [],
    logoIcons: [],
    logoStyle: [],
  },
};

export const logoSlice = createSlice({
  name: 'logo',
  initialState,
  reducers: {
    setLogoTitle: (state, action) => {
      state.value.logoTitle = action.payload;
    },
    setLogoTagline: (state, action) => {
      state.value.logoTagline = action.payload;
    },
    setLogoKeywords: (state, action) => {
      state.value.logoKeywords = action.payload;
    },
    setLogoDesigner: (state, action) => {
      state.value.logoDesigner = action.payload;
    },
     setLogoColours :(state, action) => {
      const color = action.payload;
      const colorIndex = state.value.logoColours.indexOf(color);
    
      if (colorIndex > -1) {
        // Color exists, remove it
        state.value.logoColours.splice(colorIndex, 1);
      } else {
        // Color does not exist, add it
        state.value.logoColours.push(color);
      }
    },
    setLogoIcons: (state, action) => {
      state.value.logoIcons = action.payload;
    },
    setLogoStyle: (state, action) => {
      state.value.logoStyle = action.payload;
    },
    setStep: (state, action) => {
      state.value.step = action.payload;
    },
    resetAllLogoSettings: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const {
  setLogoTitle,
  setLogoColours,
  setLogoDesigner,
  setLogoIcons,
  setLogoKeywords,
  setLogoStyle,
  setLogoTagline,
  setStep,
  resetAllLogoSettings
} = logoSlice.actions;

export default logoSlice.reducer;
