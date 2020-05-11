import { LOGIN_SUCCESS, LOGOUT, SET_CURRENT_BOARD } from "../types";

export const loginSuccess = (payload: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const setCurrentBoard = (payload: any) => {
  return {
    type: SET_CURRENT_BOARD,
    payload,
  };
};
