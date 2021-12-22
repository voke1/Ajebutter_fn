import axios from "axios";
import { LOGIN, SIGNUP } from "../../constants/url";
import { utils } from "../../utils";
import { signUpFailure, signUpSuccess } from "../../utils/Utils";

const {
  apiPost,
  clearUserData,
  setUserData,
  signUpBegin,
  loginBegin,
  loginFailure,
  loginSuccess,
  getUserData,
} = utils;

export function login(data) {
  // console.log("MYDATA: ", data)
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const result = await apiPost(LOGIN, data);
      // console.log("RESULT: ", result);
      if (result.success) {
        await setUserData(result.data);
        dispatch(loginSuccess(result.data));

        return result;
      }
      // console.log("RESULT FROM not LOGIN:; ", result)
      if (!result.success) dispatch(loginFailure(result.data));
    } catch (err) {
      // console.log("RESPONSE ERROR: ", err)
      // dispatch(loginFailure(err.response.data));
      return err;
    }
  };
}

export function signup(data) {
  return async (dispatch) => {
    dispatch(signUpBegin());
    try {
      const result = await apiPost(SIGNUP, data);
      // console.log("RESULT: ", result);
      if (result.success) dispatch(signUpSuccess(result.data));
      if (!result.success) dispatch(signUpFailure(result.data));
      return result;
    } catch (err) {
      dispatch(signUpFailure(err.response.data));
      return err.response;
    }
  };
}

export function logout() {
  dispatch({ type: types.CLEAR_REDUX_STATE });
  clearUserData();
}
