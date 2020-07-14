import {
  SET_SELECT_ICONS,
  SET_API_DEFAULTDATA,
  SET_CURRENT_CHARACTER,
} from '../types.js';
export default function mainReducer(state, action) {
  switch (action.type) {
    case SET_SELECT_ICONS:
      return { ...state, selectCharacterIcons: action.payload };
    case SET_API_DEFAULTDATA:
      return { ...state, apiData: action.payload };
    case SET_CURRENT_CHARACTER:
      return { ...state, currentCharacter: action.payload };
    default:
      return state;
  }
}
