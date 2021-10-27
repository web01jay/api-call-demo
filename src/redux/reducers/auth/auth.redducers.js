import { ISAUTHENTICATE } from "../../Types/auth.types";

const INITIAL_STATE = {
  isAuthenticate: false,
};

/*eslint-disable*/
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ISAUTHENTICATE:
      return {
        ...state,
        isAuthenticate: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
