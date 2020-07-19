import {
  SET_SELECT_ICONS,
  SET_CURRENT_CHARACTER,
  SET_CHARACTER_API_DATA,
  SET_DARKEN,
  SET_MC_DATA,
  UPDATE_MC_DATA,
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
    case SET_MC_DATA:
      let namee = action.payload.name;
      return {
        ...state,
        mcData: { ...state.mcData, [namee]: action.payload.data },
      };
    case UPDATE_MC_DATA:
      let nameee = action.payload.name;
      return {
        ...state,
        mcData: {
          ...state.mcData,
          [nameee]: {
            ...state.mcData[nameee],
            info: action.payload.data.info,
            results: [
              ...state.mcData[nameee].results,
              ...action.payload.data.results,
            ],
          },
        },
      };
    default:
      return state;
  }
}
