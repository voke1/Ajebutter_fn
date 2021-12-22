import * as authActionTypes from "../../constants/types";

const initialState = {
  specialists: null,
  error: null,
  loading: false,
  selectedSpecialist: null,
};

const specialistReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.GET_ALL_SPECIALISTS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.GET_ALL_SPECIALISTS_SUCCESS:
      return {
        ...state,
        specialists: action.payload.specialists,
        loading: false,
      };
    case authActionTypes.GET_ALL_SPECIALISTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case authActionTypes.SET_SELECTED_SPECIALIST_SUCCESS:
      return {
        ...state,
        selectedSpecialist: action.payload.selectedSpecialist
      };

    default:
      return state;
  }
};

export default specialistReducer;
