import {
  SET_SELECT_ICONS,
  SET_API_DEFAULTDATA,
  SET_CURRENT_CHARACTER,
  SET_DARKEN,
} from '../types.js';
export default function mainReducer(state, action) {
  switch (action.type) {
    case SET_SELECT_ICONS:
      return { ...state, selectCharacterIcons: action.payload };
    case SET_API_DEFAULTDATA:
      return { ...state, apiData: action.payload };
    case SET_CURRENT_CHARACTER:
      return { ...state, currentCharacter: action.payload };
    case SET_DARKEN:
      return { ...state, darken: action.payload };
    default:
      return state;
  }
}
