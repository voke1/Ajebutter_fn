import * as tabActionTypes from "./tabActions";

const initialState = {
  isEnabled: true,
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case tabActionTypes.SET_BOOK_BUTTON_VISIBILITY:
      return {
        ...state,
        isEnabled: action.payload.isEnabled,
      };
    default:
      return state;
  }
};

export default tabReducer;
