import {
  SET_SELECT_ICONS,
  SET_CURRENT_CHARACTER,
  SET_CHARACTER_API_DATA,
  SET_DARKEN,
} from '../types.js';
export default function mainReducer(state, action) {
  switch (action.type) {
    case SET_SELECT_ICONS:
      return { ...state, selectCharacterIcons: action.payload };
    case SET_CHARACTER_API_DATA:
      let name = action.payload.name;
      return {
        ...state,
        apiData: { ...state.apiData, [name]: action.payload.data },
      };
    case SET_CURRENT_CHARACTER:
      return { ...state, currentCharacter: action.payload };
    case SET_DARKEN:
      return { ...state, darken: action.payload };
    default:
      return state;
  }
}
