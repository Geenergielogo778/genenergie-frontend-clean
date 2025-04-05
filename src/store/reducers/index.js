import { combineReducers } from '@reduxjs/toolkit';
import logoReducer from './logoReducer';
import generatedLogosReducer from './generatedLogosReducer';
import userReducer from './userReducer';
import editorReducer from './editor.reducer';
import savedLogosReducer from './savedLogos.reducer';
import actionReducer from './action.reducer';
import limitReducer from './limit.reducer';
const rootReducer = combineReducers({
  logo: logoReducer,
  generatedLogos: generatedLogosReducer,
  user: userReducer,
  editor: editorReducer,
  savedLogos: savedLogosReducer,
  action: actionReducer,
  limit: limitReducer,
});

export default rootReducer;
