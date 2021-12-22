import * as authActionTypes from "../../constants/types";

const initialState = {
  user: {},
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.SIGN_UP_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case authActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case authActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
