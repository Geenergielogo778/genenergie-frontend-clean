import { createSlice } from '@reduxjs/toolkit';
import { size } from 'lodash';

const initialState = {
  font: null,
  color: {
    foregroundColor: '#ffffff',
    backgroundColor: '#aaa',
  },
  title: null,
  tagline: null,
  keywords: null,
  icon: null,
  iconCode: null,
  logotype: null,
  size: 1,
  position: 0,
  iconColor: null,
  iconRotation: 0,
};
const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setFont: (state, action) => {
      state.font = action.payload;
    },
    setBackgroundColor: (state, action) => {
      state.color.backgroundColor = action.payload;
    },
    setForegroundColor: (state, action) => {
      state.color.foregroundColor = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setTagline: (state, action) => {
      state.tagline = action.payload;
    },
    setKeywords: (state, action) => {
      state.keywords = action.payload;
    },
    setIcon: (state, action) => {
      state.icon = action.payload;
    },
    setLogotype: (state, action) => {
      state.logotype = action.payload;
    },
    setEditorConfig: (state, action) => {
      state.color = action.payload.color;
      state.font = action.payload.font;
      state.title = action.payload.title;
      state.tagline = action.payload.tagline;
      state.keywords = action.payload.keywords;
      state.iconCode = action.payload.iconCode;
      state.logotype = action.payload.logotype;
      state.size = action.payload.size;
      state.position = action.payload.position;
      state.iconColor = action.payload.iconColor;
      state.iconRotation = action.payload.iconRotation;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setIconCode: (state, action) => {
      state.iconCode = action.payload;
    },
    setTernaryColor: (state, action) => {
      state.iconColor = action.payload;
    },
    setIconRotation: (state, action) => {
      state.iconRotation = action.payload;
    },
  },
});
export const {
  setFont,
  setIcon,
  setKeywords,
  setLogotype,
  setTagline,
  setTitle,
  setEditorConfig,
  setForegroundColor,
  setBackgroundColor,
  setPosition,
  setSize,
  setIconCode,
  setTernaryColor,
  setIconRotation,
} = editorSlice.actions;
export default editorSlice.reducer;
