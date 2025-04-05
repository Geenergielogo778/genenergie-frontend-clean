import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  action: null,
  packageName: null,
  path: null,
};

const actionSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    /**
     *
     *
     * @param {{
     *   action: string,
     *   path: string
     *   packageName: string
     * }} action
     */
    setAction: (state, action) => {
      state.action = action.payload.action;
      state.path = action.payload.path;
      state.packageName = action.payload.packageName;
    },
  },
});

export const { setAction } = actionSlice.actions;
export default actionSlice.reducer;
