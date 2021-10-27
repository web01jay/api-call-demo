import { ISAUTHENTICATE } from "../../Types/auth.types";

/*eslint-disable*/
export const setLoginAuthentication = (value) => {
  return {
    type: ISAUTHENTICATE,
    payload: value,
  };
};
