import { ISAUTHENTICATE } from "../../Types/auth.types";

/*eslint-disable*/
export const setLoginAuthentication = (value) => {
  // console.log(value, `action value`)
  return {
    type: ISAUTHENTICATE,
    payload: value,
  };
};
