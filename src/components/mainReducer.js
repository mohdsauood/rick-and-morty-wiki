import React from 'react';
import { SET_SELECT_ICONS, SET_API_DEFAULTDATA } from '../types.js';
export default function mainReducer(state, action) {
  switch (action.type) {
    case SET_SELECT_ICONS:
      return { ...state, selectCharacterIcons: action.payload };
    case SET_API_DEFAULTDATA:
      return { ...state, apiData: action.payload };
    default:
      return state;
  }
}
